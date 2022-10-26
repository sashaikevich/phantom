# Ghostbuster Cadet Evaluation

This is a demo project reworking PhantomBuster's most popular LinkedIn Flow, and presenting it on PB's prefered stack; React-flavoured TypeScript, Tailwind, Storybook, Jest, and Cypress.

The project makes assumptions about PB's future; the rollout of the store, 3rd Party Phantoms, and the subsequent need for more consistent user interfaces and structure across the site. It's based on those assumptions that the LinkedIn Flow was reimagined, aiming for the midpoint between it's future form as planned by PB, and it's current design.

A live demo can be found here: todo

## Summary

The design is opinionated. The components include maximal layout styles, trading customization for speed of setup. Individual form sections are grouped together and can be easily added to the page with no setup. Their inputs are already mapped to the appropriate

### Tailwind

But, building blocks and overrides have been included strategically.

Custom classes added into appropriate base/component/utility layers.

Familiarity with Tailwind is demostrated by extending shadow and font size settings. By setting up custom variant functions (for child selectors, which do not come natively in TW, unlike peer and group.). And, by including class override plagin (to preserve the order of classes added)

### Storybook

Assuming a phased rollout of changes, stories are split into the following organization: _Can Use_, _Deprecated_, _Experimental_

Familiarity with Storybook is demonstrated by using documentation via argTypes and context via decorators: (_LaunchButton_ story)

todo: write an intro page

### TypeScript

The app is strictly typed. Project scenario assumes JSON fields provided by back-end team for front-end to implement.

The object's keys and values are typed and added to the library of types. So, whenever a new Phantom/Flow needs to be created, that universal type can be extended. The Fields and Keys are associated with each other using a generic (This takes advantage of intellisense completion - a really nice feature!). Inferred types are preferred.

### Jest

Example test directly on stories, to demostrate best practice / minimal divergence.

todo: add coverage
todo: consider mocking something to wow the g's
todo: ### Cypress
todo: maybe do a CI/CD deploy with GH's actions?
