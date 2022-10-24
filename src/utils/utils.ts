import { overrideTailwindClasses } from "tailwind-override"
import {
  FlowMenuItemType,
  FlatFlowMenuItemType,
} from "../features/PhantomSetup/d"

type Falsy = boolean | undefined | null | 0

export function classNames(...classes: (string | Falsy)[]) {
  return overrideTailwindClasses(classes.filter(Boolean).join(" "), {
    prefix: "tw-",
  })
}

export function uid() {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(
    /\./g,
    ""
  )
}

export function flattenMenu(menu: FlowMenuItemType[]) {
  const flatMenu = [] as FlatFlowMenuItemType[]
  let id = 0
  const lvl = 0

  function flatten(
    menu: FlowMenuItemType[],
    level: number,
    providedParent?: number
  ) {
    menu.forEach(item => {
      if (item.subMenuItems?.length) {
        const { label, visibleIn } = item
        flatMenu.push({ id, level: lvl, label, visibleIn, childrenIds: [] })
        const parentId = id
        id++
        flatten(item.subMenuItems, level + 1, parentId)
      } else {
        flatMenu.push({ id, level: level, ...item })
        if (flatMenu && providedParent !== undefined) {
          flatMenu[providedParent].childrenIds?.push(id)
        }
        id++
      }
    })
  }

  flatten(menu, 0)
  return flatMenu
}

// deprecated
export function makeUrlPathFromTitle(title: string) {
  return encodeURIComponent(title.replaceAll(" ", "-"))
}
