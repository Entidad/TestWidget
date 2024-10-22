## TestWidget
FaceTec Mendix test widget

## Features
Sort out compilation issues

## Tools

* node: v20.18.0
* npm: 10.8.2

## Building

Copy `FaceTecSDK-browser/core-sdk` and `FaceTecSDK-browser/core-sdk-optional` to `./src/FaceTecSDK-browser`

```
mkdir ./src/FaceTecSDK-browser
cp -r ~/FaceTecSDK-browser-9.7.32/core-sdk ./src/FaceTecSDK-browser
cp -r ~/FaceTecSDK-browser-9.7.32/core-sdk-optional ./src/FaceTecSDK-browser
```

Install prerequisite libraries

```
npm install
```

Build widget

```
npm run build
```

This should result in a bundled widget in the `dist` folder in the root directory of the project
