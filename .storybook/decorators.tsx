import { SetupProvider } from "../src/contexts/setupContext"
import { ViewProvider } from "../src/contexts/viewContext"
import { DecoratorFn } from "@storybook/react"
import { withRouter } from "storybook-addon-react-router-v6"
import { createContext } from "react"
export { withRouter } from "storybook-addon-react-router-v6"

export const withSetupContext: DecoratorFn = (Story, context) => {
  console.log(context)
  const FakeContext = createContext(null)
  return (
    <SetupProvider>
      <FakeContext.Provider value={}>
        <Story />
      </FakeContext.Provider>
    </SetupProvider>
  )
}
export const withViewContext: DecoratorFn = Story => {
  return (
    <ViewProvider>
      <Story />
    </ViewProvider>
  )
}

export const withWrapAndLabel: DecoratorFn = (Story, context) => {
  if (context.viewMode === "story") {
    return (
      <fieldset className="tw-max-w-[700px] tw-p-6 tw-pt-3 tw-border tw-border-redi-borders tw-rounded-lg">
        <legend>{context.name}</legend>
        <Story />
      </fieldset>
    )
  } else {
    return <Story />
  }
}

export const decorators = [
  withWrapAndLabel,
  withSetupContext,
  withViewContext,
  withRouter,
]
