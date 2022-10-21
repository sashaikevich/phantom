/* 
PHANTOM'S VIEW MODES
*/

export const VisibleSlug = {
  Quick: "quick",
  All: "all",
  JSON: "json",
} as const

export type VisibleSlug = typeof VisibleSlug[keyof typeof VisibleSlug]

export interface ViewModeType {
  label: string
  slug: VisibleSlug
}
