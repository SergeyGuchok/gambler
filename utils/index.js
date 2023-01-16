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
