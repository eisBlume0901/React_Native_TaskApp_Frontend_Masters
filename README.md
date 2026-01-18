- Notes: https://kadikraman.github.io/react-native-v3-course/

- Expo: https://docs.expo.dev/

- npx create-expo-app <app_name> — create a new Expo project. Run this command in the directory where you want the project folder created
- (do not run it inside an existing folder with the same name), because it will create a new folder called <app_name>.
- npx create-expo-app <app_name> --template blank-typescript - Scaffolds a new app folder and a working project structure
- adds TypeScript support and TypeScript typings
- (npx) expo start / npm run start - to run the project (it will show a QR code to scan for Expo Go)
- (npx) expo start --tunnel - tarts the bundler and exposes it using a tunnel (Expo uses ngrok internally; no separate install required).
- This is useful for rapid prototyping and development by sharing the dev server over the internet (tunnel/ngrok) for remote
- testing
- npx expo lint - runs ESLint for Expo project. Checks JavaScript/TypeScript files and reports style/errors
- {PixelRatio.get()} - returns the device pixel density 

Terms or Commands Learned
- npx - Node package executor (executes packages from the Node package repository without installing them globally on the machine)
- npx command should only be used for NodeJS frontend frameworks (npm install is preferred for backend)

Important
1. Ensure that package manager supports node modules linking to allow test changes in real-time within another project
- without publishing it to the npm registry.
2. condition && <Component> is not recommended because if there is non-boolean values like 0 or '' will render an unexpected output
- Do a full statement instead Ternary operators is recommended

What I have learned:
1. React Native is split into two: JavaScript runtime - implements React code, native - renders UI and provides platform APIs
2. Expo Go is a React Native framework