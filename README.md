# UI Shared

UI Shared contains a number of shared API components for the UI. The UIs are a set of micro-frontends, implemented using Webpack module federation. This module is loaded as an eager singleton.

## Shared React contexts

In order for a React context to be shared between modules, it must be defined in a shared library and imported by all modules that use the context.

