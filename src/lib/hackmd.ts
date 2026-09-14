import { API } from '@hackmd/api';
import MarkdownIt from 'markdown-it';

export const client = new API(import.meta.env.HACKMD_API_ACCESS_TOKEN);

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
});

export function renderMarkdown(content: string) {
  return md.render(content);
}

export function getNoteSlug(note: { permalink: string | null; shortId: string }) {
  return note.permalink ?? note.shortId;
}
