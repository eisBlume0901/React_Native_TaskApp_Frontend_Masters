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

- npx expo install @expo/vector-icons - installing Expo icons (such as Ionicons)

- npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
- installs Expo Router (file\-based navigation), safe area handling, native screen management, deep linking support, app constants, and status bar control.- 

- npx expo start --reset-cache - always do this whenever there is changes in the code to resolve bundling or module issues

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
5. Know how to do navigation: https://kadikraman.github.io/react-native-v3-course/docs/navigation/6-1-install-navigation/
6. Scheme - add a scheme field in app.json (e.g. "scheme": "taskly") to define a custom URL scheme like taskly://.  
- This enables deep linking so the app can be opened directly to specific screens from links, notifications, or other apps.
7. _layout.tsx - tells how screens in a folder should be laid out such as defining navigation type (stack, tab, modal) and adding header
8. Link - useful for sending the user to somewhere specific. Router - use it when navigation happens as a result of logic (after a fetch, after a timer)
9. router methods
- .push - adds a new screen on top of the stack, user can press back to return to the previous screen (go forward to this route)
- .navigate() - behaves more like web navigation (still keeps history so back usually works), if you are already on that route,
- it may reuse it instead of stacking duplicates
- .replace() - replaces the current screen, user cannot go back to the replaced screen, common after login, onboarding or redirects 
- (useful for auth flows, splash screens, success pages)
- .back() - goes back one step in the navigation history (pops the stack). If there is no history, behavior can depend on the platform 
- (may close the app or do nothing)
- .canGoBack() - returns true or false if there is something to go back to (useful before calling back() to avoid weird behavior)
- .setParams() - updates the current route\'s search/query parameters without navigating away
- .prefetch() - preloads the code/data for a route in the background, makes the next navigation to that screen faster
10. Stack vs Tab vs Modal - stack is pile of screens (List to Details, Home to Settings, Login to Home), tabs is multiple root sections side by side
- (Home, Search, Profile, Settings), and modal is temporary dialog over the current screen (Add item form, edit profile form, filter or sort dialog)
11. index.tsx - default screen or route for that folder's route path, default content of the screen being projected without doing any navigation yet
12. _layout.tsx - navigator / layout wrapper for all routes in that folder (not necessarily the single global root)
13. Nested navigators can lead to two or more navigation headers but can be resolved by hiding the outermost header using headerShown: false (outermost not
- inside subfolders of app)
14. TextInput - has placeholder, style, value, onChangeText, keyboardType, autoCapitalize, autoComplete properties
- just find what is the appropriate depending on the business logic requirement
- returnKeyType - can be done, next (good for filling multi-field forms), search (to trigger search), send (for chat and messages)
15. type - defines a shape of data helpful for error checking (exclusive to TypeScript)
16. Type annotation uses :, Value assignment uses =
- Type annotation is a TypeScript syntax which is useful for catching mistakes early before running the app 
- Useful for testing initial or dummy data
- Value assignment is native to every programming languages 
17. FlatList - is more optimized compared to using ScrollView

What I have learned:
1. React Native is split into two: JavaScript runtime - implements React code, native - renders UI and provides platform APIs
2. Expo Go is a React Native framework
3. View = div
4. Text = p, h
5. TouchableOpacity / Pressable = Button
- Pressable is more customizable, https://reactnative.dev/docs/pressable
6. Ctrl + Alt + L - reformat the code
7. SVG is not efficient to native apps which can blow memory/CPU on mobile that can slowdown or crash the app
8. Pressable is useful because you can make the touchable area larger than the visible icon or button, so users do not need to tap the icon pixel-perfectly
9. useState - React Hook (state hook declaration), can be used for array destructuring of the value returned by that hook
- const [value, setValue] = useState(""), set the default argument to empty string (or depending on business logic requirement)
