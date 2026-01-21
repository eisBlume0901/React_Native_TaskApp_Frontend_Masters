import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      {/*Can Add screenOptions={{ headerShown: false}} to Stack component! (Useful for CarboTrackr UI/UX design)*/}
      <Stack.Screen name="index" options={{ title: "Shopping List" }} />
    </Stack>
  );
}