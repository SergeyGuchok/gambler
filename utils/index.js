import path from 'path';
import fs from 'fs';

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function disableScroll() {
  const html = document.querySelector('html');
  html.style.overflowY = 'hidden';
}

export function enableScroll() {
  const html = document.querySelector('html');
  html.style.overflowY = 'auto';
}

export function readMarkdown(p) {
  const dir = path.join(process.cwd(), p);
  return fs.readFileSync(dir, 'utf-8');
}
