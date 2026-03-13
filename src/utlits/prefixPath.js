export function prefixPath(path) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ""
  return `${base}${path}`
}
