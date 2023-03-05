# Sandbox Electron KMS
## Install
Clone repo and install dependencies:
```
git clone https://github.com/maspaitujaki/sandbox-electron.git

cd sandbox-electron

npm install
// or
yarn install
```

## Development
Start the app:
```
npm run electron:serve
// or
yarn electron:serve
```
The electron window will show a blank white screen. It is waiting for React app to start

## Build
To package the app:
```
npm run electron:build
// or
yarn electron:build
```
The app installer could be found in "./dist/pairing-system Setup 0.1.0.exe"
