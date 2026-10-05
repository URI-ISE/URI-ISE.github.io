/**
 * Normalize a page path to the public, extensionless URL the sitemap uses.
 * Static builds (build.format: 'file') report paths like "/people.html" and "/index.html".
 *   "/people.html" → "/people",  "/index.html" → "/",  "/research/" → "/research"
 */
export function cleanPath(pathname: string): string {
  return (
    pathname
      .replace(/\.html$/, "")
      .replace(/\/index$/, "/")
      .replace(/(.)\/$/, "$1") || "/"
  );
}
