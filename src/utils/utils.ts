import { overrideTailwindClasses } from "tailwind-override"


export function makeUrlPathFromTitle(title: string) {
  return encodeURIComponent(title.replaceAll(" ", "-"))
}

type Falsy = boolean | undefined | null | 0

export function classNames(...classes: (string | Falsy)[]) {
  return classes.filter(Boolean).join(" ")
}

export function uid() {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(
    /\./g,
    ""
  )
}
