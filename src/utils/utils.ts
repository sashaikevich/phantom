export const makeUrlPathFromTitle = (title: string) => {
  return encodeURIComponent(title.replaceAll(" ", "-"))
}