import { flattenMenu } from "../../../utils"

import {
  ViewModeType,
  FlowMenuItemType,
  PhantomSetupType,
  SendScheduleType,
  ManageFoldersType,
  PreferredProxyType,
  IPLifespanType,
} from "../d"

export const viewModes: ViewModeType[] = [
  { label: "Quick Setup", slug: "quick" },
  { label: "All Settings", slug: "all" },
  { label: "JSON", slug: "json" },
]

/*
PHANTOM SETUP MENU (represents (sub)sections on the setup page)
*/

const flowLinkedInMenu: FlowMenuItemType[] = [
  {
    label: "Search",
    visibleIn: ["all", "quick"],
    subMenuItems: [
      {
        label: "Cookie",
        visibleIn: ["all", "quick"],
      },
    ],
  },
  {
    label: "Automation",
    visibleIn: ["all", "quick"],
    subMenuItems: [
      {
        label: "Outreach account",
        visibleIn: ["all", "quick"],
      },
      {
        label: "Outreach limits",
        visibleIn: ["all", "quick"],
      },
      {
        label: "Extraction limits",
        visibleIn: ["all"],
      },
      {
        label: "Critical Execution limits",
        visibleIn: ["all"],
      },
      {
        label: "Data management",
        visibleIn: ["all"],
      },
    ],
  },
  {
    label: "Proxies",
    visibleIn: ["all"],
  },
  {
    label: "Notifications",
    visibleIn: ["all", "quick"],
  },
]

export const flatMenu = flattenMenu(flowLinkedInMenu)

// /*
// PHANTOM'S SHAPE
// */
// export type FlowLinkedInType = Partial<PhantomSetupType>

export const INITIAL_CONFIG: PhantomSetupType = {
  searchTerm: "",
  searchType: "",
  dataColumn: "",
  personalizedMsg: "",
  linkedInCookie: "",
  useSalesNavigator: false,
  sendSchedule: SendScheduleType.Weekdays,
  sendFrequency: 1,
  limitRegularSearch: 1,
  limitNavigatorSearch: 1,
  limitGroupSearch: 1,
  maxExecutionTime: 0,
  maxParallelExecutions: 0,
  maxRetries: 0,
  manageFolders: ManageFoldersType.Keep,
  keepNFolders: 0,
  preferredProxy: PreferredProxyType.None,
  proxyAddress: "",
  proxyUsername: "",
  proxyPassword: "",
  IPLifespan: IPLifespanType.Static,
  refreshFrequency: 0,
  proxyLocation: "France",
  eventSuccFinish_via_email: false,
  eventSuccFinish_via_slack: false,
  eventSuccFinish_via_webhook: false,
  eventErrFinish_via_email: false,
  eventErrFinish_via_slack: false,
  eventErrFinish_via_webhook: false,
  eventErrLaunch_via_email: false,
  eventErrLaunch_via_slack: false,
  eventErrLaunch_via_webhook: false,
  eventLimitTime_via_email: false,
  eventLimitTime_via_slack: false,
  eventLimitTime_via_webhook: false,
  slackWebhook: "",
  webhook: "",
}

