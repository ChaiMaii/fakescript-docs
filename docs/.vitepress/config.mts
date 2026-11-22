import { defineConfig } from 'vitepress'

export default defineConfig({
  base: process.env.VITEPRESS_BASE || '/',
  title: 'FakeScript',
  description: 'A strictly zero-symbol, Ahead-of-Time compiled programming language.',
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'FakeScript',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Standard Library', link: '/reference/stdlib' },
      { text: 'Examples', link: '/reference/examples' },
      { text: 'v3.0.0', link: '/reference/architecture' }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Quick Start', link: '/guide/getting-started' },
          { text: 'CLI & Commands', link: '/guide/cli' }
        ]
      },
      {
        text: 'Language Guide',
        items: [
          { text: 'Syntax & Types', link: '/guide/syntax-and-types' },
          { text: 'Variables & Lazy Thunks', link: '/guide/variables-and-thunks' },
          { text: 'Expressions & Operators', link: '/guide/expressions' },
          { text: 'Control Flow & Loops', link: '/guide/control-flow' },
          { text: 'Functions & Recursion', link: '/guide/functions' },
          { text: 'Lists & Standard Input', link: '/guide/lists-and-input' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Standard Library', link: '/reference/stdlib' },
          { text: 'Compiler Architecture', link: '/reference/architecture' },
          { text: 'Examples', link: '/reference/examples' }
        ]
      }
    ],
    footer: {
      message: 'FakeScript (.fks) — Strictly zero punctuation symbols, native Go-powered binaries.',
      copyright: 'FakeScript v3.0'
    }
  }
})
