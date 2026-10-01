/**
 * Returns correct URL for static assets accounting for Vite base configuration
 * @param {string} path - Asset path (e.g. "/video/P2.mp4" or "video/P2.mp4")
 * @returns {string} Formatted asset path
 */
export const getAssetUrl = (path) => {
  if (!path) return '';
  // Return external URLs untouched
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  // Strip leading slash
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const baseUrl = import.meta.env.BASE_URL || '/';
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
};
