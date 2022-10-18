import { string } from "prop-types"

/* 
PHANTOM'S VIEW MODES
*/

interface viewModesType {
  label: string
  slug: "quick" | "all" | "json"
}

// bous: figure out how to do this automatically:
// export enum ViewModeSlug {
//   quick = "quick",
//   full = "all",
//   json = "json",
// }

export const viewModes: viewModesType[] = [
  { label: "Quick Start", slug: "quick" },
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
    value: undefined,
  },
  searchType: {
    value: undefined,
  },
  dataColumn: {
    value: undefined,
  },
  personalizedMsg: {
    value: undefined,
  },
  linkedInCookie: {
    value: undefined,
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
    value: undefined,
  },
  preferredProxy: {
    value: "none",
  },
  proxyAddress: {
    value: undefined,
  },
  proxyUsername: {
    value: undefined,
  },
  proxyPassword: {
    value: undefined,
  },
  IPLifespan: {
    value: "static",
  },
  refreshFrequency: {
    value: undefined,
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
    value: undefined,
  },
  webhook: {
    value: undefined,
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