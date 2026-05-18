const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

export function url(path: string): string {
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('#') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:')
  ) {
    return path;
  }
  return base + (path.startsWith('/') ? path : '/' + path);
}
