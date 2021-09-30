# Theme inheritance proof of concept

## Installation

```bash
yarn
```

## Testing

Go to `packages/scandipwa-b-variant` and start build server.

```bash
yarn start
```

Then go to `packages/scandipwa-b1-variant` and start build server too.

```bash
yarn start
```

It should prompt for changing a port, press `Y`.

## Description

This repo is made to show the working concept of theme nesting on more than 2 levels.

- `packages/scandipwa-base` is a Base theme, inherits `@scandipwa/scandipwa` theme.
- `packages/scandipwa-b-variant` is a B theme, inherits Base theme.
- `packages/scandipwa-b1-variant` and `packages/scandipwa-b2-variant` inherits B theme.

B and B1 themes extend Footer component. B theme adds **FROM B VARIANT!!!** to the copyright, B1 theme adds **FROM B1 VARIANT!!!** respectively.

B theme extends Footer component from Source (`@scandipwa/scandipwa`) and B1 theme extends Footer component from B theme.


And that's it!
