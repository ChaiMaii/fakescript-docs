# Stage 1: Build VitePress static site
FROM node:22-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY docs ./docs
RUN npm run docs:build

# Stage 2: Serve static site with Nginx
FROM nginx:stable

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD sh -c 'test -f /var/run/nginx.pid && kill -0 $(cat /var/run/nginx.pid)' || exit 1
