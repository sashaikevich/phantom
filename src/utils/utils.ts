export const makeUrlPath = (title: string) => {
  return encodeURIComponent(title.replaceAll(" ", "-"))
}