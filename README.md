# Ghostbuster Cadet Evaluation
This is a demo project reworking PhantomBuster's most popular LinkedIn Flow, and presenting it on PB's prefered stack; React-flavoured TypeScript, Tailwind, Storybook, Jest, and Cypress.

The project makes assumptions about PB's future; the rollout of the store, 3rd Party Phantoms, and the subsequent need for more consistent user interfaces and structure across the site. It's based on those assumptions that the LinkedIn Flow was reimagined, aiming for the midpoint between it's future form as planned by PB, and it's current design.

A live demo can be found here: todo

## Storybook
Assuming a phased rollout of changes, stories are split into the following organization:
- *Can Use*,
- *Deprecated*, 
- *Experimental* 

Familiarity with Storybook is demonstrated by using documentation via argTypes (*InfoBox*), use of mdx (*Text* story - todo), and context via decorators: (*ViewToggle* story)
todo: mock service worker?

## Jest
test in isolation (not dependent on other tests running before it). Tests can be run in isolation / skipped without impacting other tests. Render factory 
generate coverage report
Mock data fetch scenarios in tests. Deploy app.

## Cypress


## maybe CI/CD ? 
todo maybe use gh's actions