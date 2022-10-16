import { string } from "prop-types"

interface viewModesType {
  label: string
  slug: "quick" | "full" | "json"
}

// todo: figure out how to do this automatically:
// export enum ViewModeSlug {
//   quick = "quick",
//   full = "full",
//   json = "json",
// }

export const viewModes: viewModesType[] = [
  { label: "Quick Start", slug: "quick" },
  { label: "All Settings", slug: "full" },
  { label: "JSON", slug: "json" },
]


// todo use zod maybe
interface LinkedInFlowInterface {
    // typesafeProp1?: number,
    // requiredProp1: string,
    [key: string]: any
}


export const INITIAL_CONFIG:LinkedInFlowInterface = {
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
  sendOnWeekend: {
    value: false,
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
    value: "delete|create|keep",
  },
  keepNFolders: {
    value: undefined,
  },
  preferred: {
    value: "none|phantom|random|http",
  },
  proxyAddress: {
    value: undefined,
  },
  proxyUsername: {
    value: undefined,
  },
  proxyPassword: {
    value: "encript****",
  },
  refreshIP: {
    value: false,
  },
  refreshFrequency: {
    value: undefined,
  },
  proxyLocation: {
    value: undefined,
  },
  eventSuccFinish: {
    value: [undefined],
  },
  eventErrFinish: {
    value: [undefined],
  },
  eventErrLaunch: {
    value: [undefined],
  },
  eventLimitTime: {
    value: [undefined],
  },
  slackWebHook: {
    value: undefined,
  },
  webHook: {
    value: undefined,
  },
}
