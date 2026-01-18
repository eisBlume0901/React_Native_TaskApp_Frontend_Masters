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
- in relation to the installed dependency (such as eslint-plugin-react-native) it can for instance check unused styles
- npm install --save-dev eslint prettier eslint-plugin-prettier eslint-plugin-react-native eslint-config-expo (check eslint.config.js of this project)
- it can now check unused styles 

Terms or Commands Learned
- npx - Node package executor (executes packages from the Node package repository without installing them globally on the machine)
- npx command should only be used for NodeJS frontend frameworks (npm install is preferred for backend)

Important
1. Ensure that package manager supports node modules linking to allow test changes in real-time within another project
- without publishing it to the npm registry.
2. condition && <Component> is not recommended because if there is non-boolean values like 0, '', NaN will render an unexpected output
- Do a full conditional statement always.
3. Stylesheet is always at the end of the file 
4. Create a theme.ts for commonly used properties to globally access them.

What I have learned:
1. React Native is split into two: JavaScript runtime - implements React code, native - renders UI and provides platform APIs
2. Expo Go is a React Native framework
3. View = div
4. Text = p, h
5. TouchableOpacity / Pressable = Button
- Pressable is more customizable, https://reactnative.dev/docs/pressable
6. Ctrl + Alt + L - reformat the code