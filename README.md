# FakeScript Documentation

Official documentation site for **FakeScript (`.fks`) v3.0** — an Ahead-of-Time (AOT) compiled programming language with strictly zero punctuation symbols.

Built with [VitePress](https://vitepress.dev/) and packaged for zero-effort Docker deployment on Debian 13 (Trixie) and other Linux hosts.

## Local Development

### Prerequisites

- Node.js 22+ and npm

### Run Locally

```bash
npm install
npm run docs:dev
```

### Build & Preview

```bash
npm run docs:build
npm run docs:preview
```

## Docker Deployment (Debian 13)

The included multi-stage `Dockerfile` builds the static site in `node:22-slim` and serves it with `nginx:stable` (configured for VitePress `cleanUrls: true`, custom `404.html`, gzip compression, and immutable asset caching).

### Using Docker Compose

```bash
docker compose up -d --build
```

The site will be available on `http://localhost:8080`. To use a different port:

```bash
PORT=3000 docker compose up -d --build
```

### Using Docker Directly

```bash
docker build -t fakescript-docs .
docker run -d --name fakescript-docs -p 8080:80 --restart unless-stopped fakescript-docs
```

## Project Structure

```text
fakescript-docs/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts        # VitePress site config, nav, sidebar & local search
│   │   └── theme/            # Custom theme styling
│   ├── guide/                # Getting started & language guide
│   ├── reference/            # Standard library, compiler architecture & examples
│   └── index.md              # Landing page
├── Dockerfile                # Multi-stage Debian-based production build
├── compose.yaml              # Docker Compose service definition
├── nginx.conf                # Nginx config with cleanUrls & caching
├── .dockerignore
├── .gitignore
└── package.json
```
