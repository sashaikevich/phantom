import "../src/tailwind.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      // expanded:true,
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    // hide the canvas as an option, and replace auto docs with generated mdx
    // canvas: { hidden: true },
  },
  docs: {
    // hide the decorators when previewing the code in docs -> show code
    source: {
      type: "dynamic",
      excludeDecorators: true,
    },
  },
}
