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
    // canvas: { hidden: true },
  },
}
