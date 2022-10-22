import { SetupProvider, useSetupContext } from "../src/context/setupContext"
import { DecoratorFn } from "@storybook/react"
import { withRouter } from "storybook-addon-react-router-v6"
export { withRouter } from "storybook-addon-react-router-v6"

export const withSetupContext: DecoratorFn = Story => {
  return (
    <SetupProvider>
      <Story />
    </SetupProvider>
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

export const decorators = [withWrapAndLabel, withSetupContext, withRouter]
