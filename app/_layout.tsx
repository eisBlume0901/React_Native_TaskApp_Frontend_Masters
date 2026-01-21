import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      {/*Can Add screenOptions={{ headerShown: false}} to Stack component! (Useful for CarboTrackr UI/UX design)*/}
      <Stack.Screen name="index" options={{ title: "Shopping List" }} />
      {/*In Android, using "modal" does not look like it pop up a screen but still feels like stacking screens which is normal (unlike IOS which is apparent)*/}
      {/*Can use default animations to really show the difference of a stack and a modal (animations can also be customized)*/}
      <Stack.Screen name="counter" options={{ title: "Counter", presentation: "modal", animation: "slide_from_bottom"}} />
      <Stack.Screen name="idea" options={{ title: "Idea" }} />
    </Stack>
  );
}