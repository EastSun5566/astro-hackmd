# Astro + HackMD

A minimal Astro site that uses HackMD as a CMS. It fetches publicly readable notes with the official `@hackmd/api` client and renders Markdown content with `markdown-it`.

## Requirements

- Node.js 22 or later
- pnpm
- A HackMD API access token
- At least one note with its read permission set to **Everyone**

## Getting started

Install the dependencies:

```shell
pnpm install
```

Create your local environment file:

```shell
cp .env.example .env
```

Replace `<YOUR_API_ACCESS_TOKEN>` in `.env` with your HackMD API access token, then start the development server:

```shell
pnpm dev
```

Open <http://localhost:4321/>. The index only lists notes whose `readPermission` is `guest`.

## Production build

```shell
pnpm build
pnpm preview
```

This example generates static pages. Rebuild the site to publish changes made in HackMD.

## How it works

```text
src/
├── lib/
│   └── hackmd.ts          # API client, slug helper, and Markdown renderer
└── pages/
    ├── index.astro        # Public note list
    └── notes/
        └── [slug].astro   # Static page for each note
```

`getNoteList()` provides the note IDs and slugs used to create routes. Each note page calls `getNote()` to retrieve the full Markdown content.

The Markdown renderer uses `html: false`, so raw HTML in a note is escaped before the result is passed to Astro's `set:html` directive. Sanitize the rendered output first if you choose to enable raw HTML.

Keep `.env` out of Git, and do not prefix the API access token variable with `PUBLIC_`.
