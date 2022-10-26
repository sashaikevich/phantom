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
  options: {
    storySort: {
      order: ["Components", "Phantom Setup", "Experimental", "Depecated"],
    },
  },
  previewTabs: {
    // hide the canvas as an option, and replace auto docs with generated mdx
    canvas: { hidden: true },
  },
  docs: {
    // hide the decorators' code in code previews, when viewing the story in docs
    source: {
      type: "dynamic",
      excludeDecorators: true,
    },
  },
}
