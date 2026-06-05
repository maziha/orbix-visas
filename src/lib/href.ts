/** Build a path with an optional hash fragment. */
export function hrefWithHash(path: string, hash?: string): string {
  return hash ? `${path}#${hash}` : path;
}
