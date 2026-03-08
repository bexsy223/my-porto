export function prefixPath(path) {
  const repo = process.env.NEXT_PUBLIC_REPO_NAME || "my-porto"
  const isProd = process.env.NODE_ENV === "production"
  return isProd ? `/${repo}${path}` : path
}
