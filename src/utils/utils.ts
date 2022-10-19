import { overrideTailwindClasses } from "tailwind-override"
import { FlowMenuItemType } from "../features/PhantomSetupNew/MOCK_DATA"

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

interface FlatMenuItemType extends Omit<FlowMenuItemType, "subMenuItems"> {
  id: number
  childrenIds?: number[]
}

export function flattenMenu(menu: FlowMenuItemType[]) {
  const flatMenu = [] as FlatMenuItemType[]
  let id = 0

  function flatten(menu: FlowMenuItemType[], providedParent?: number) {
    menu.forEach(item => {
      if (item.subMenuItems?.length) {
        const { label, visibleIn } = item
        flatMenu.push({ id, label, visibleIn, childrenIds: [] })
        const parentId = id
        id++
        flatten(item.subMenuItems, parentId)
      } else {
        flatMenu.push({ id, ...item })
        if (providedParent !== undefined) {
          flatMenu[providedParent].childrenIds!.push(id)
        }
        id++
      }
    })
  }

  flatten(menu)
  return flatMenu
}
