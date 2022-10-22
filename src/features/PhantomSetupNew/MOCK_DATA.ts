import { string } from "prop-types"
import { VisibleSlug, ViewModeType } from "../PhantomSetupNew/d"

export const viewModes: ViewModeType[] = [
  { label: "Quick Setup", slug: "quick" },
  { label: "All Settings", slug: "all" },
  { label: "JSON", slug: "json" },
]

/*
PHANTOM'S SHAPE
*/

// bonus properly type this zod / json2ts

interface LinkedInFlowInterface {
  [key: string]: {
    value: any
  }
}

export const INITIAL_CONFIG: LinkedInFlowInterface = {
  searchTerm: {
    value: "",
  },
  searchType: {
    value: "",
  },
  dataColumn: {
    value: "",
  },
  personalizedMsg: {
    value: "",
  },
  linkedInCookie: {
    value: "",
  },
  useSalesNavigator: {
    value: false,
  },
  sendSchedule: {
    value: "weekdays",
  },
  sendFrequency: {
    value: 1,
  },
  limitRegularSearch: {
    value: 1,
  },
  limitNavigatorSearch: {
    value: 1,
  },
  limitGroupSearch: {
    value: 1,
  },
  maxExecutionTime: {
    value: 0,
  },
  maxParallelExecutions: {
    value: 0,
  },
  maxRetries: {
    value: 0,
  },
  manageFolders: {
    value: "keep",
  },
  keepNFolders: {
    value: 0,
  },
  preferredProxy: {
    value: "none",
  },
  proxyAddress: {
    value: "",
  },
  proxyUsername: {
    value: "",
  },
  proxyPassword: {
    value: "",
  },
  IPLifespan: {
    value: "static",
  },
  refreshFrequency: {
    value: 0,
  },
  proxyLocation: {
    value: "France",
  },
  eventSuccFinish_via_email: {
    value: false,
  },
  eventSuccFinish_via_slack: {
    value: false,
  },
  eventSuccFinish_via_webhook: {
    value: false,
  },
  eventErrFinish_via_email: {
    value: false,
  },
  eventErrFinish_via_slack: {
    value: false,
  },
  eventErrFinish_via_webhook: {
    value: false,
  },
  eventErrLaunch_via_email: {
    value: false,
  },
  eventErrLaunch_via_slack: {
    value: false,
  },
  eventErrLaunch_via_webhook: {
    value: false,
  },
  eventLimitTime_via_email: {
    value: false,
  },
  eventLimitTime_via_slack: {
    value: false,
  },
  eventLimitTime_via_webhook: {
    value: false,
  },
  slackWebhook: {
    value: "",
  },
  webhook: {
    value: "",
  },
}

/*
PHANTOM'S NOTIFICATION OPTIONS 
*/

export const triggers = [
  {
    label: "Finished successfully",
    mappedPrefix: "eventSuccFinish",
  },
  {
    label: "Finished with error",
    mappedPrefix: "eventErrFinish",
  },
  {
    label: "Launch error",
    mappedPrefix: "eventErrLaunch",
  },
  {
    label: "Time limit reached",
    mappedPrefix: "eventLimitTime",
  },
]
export const channels = [
  {
    label: "Email",
    mappedSuffix: "via_email",
  },
  {
    label: "Slack",
    mappedSuffix: "via_slack",
  },
  {
    label: "Webhook",
    mappedSuffix: "via_webhook",
  },
]

/* 
PHANTOM SETUP MENU
*/
export interface FlowMenuItemType {
  label: string
  visibleIn: VisibleSlug[]
  subMenuItems?: FlowMenuItemType[]
}

export const flowMenuItems: FlowMenuItemType[] = [
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
