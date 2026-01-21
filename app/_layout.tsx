import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      {/*Can Add headerShown to false instead! (Useful for CarboTrackr UI/UX design)*/}
      <Stack.Screen name="index" options={{ title: "Shopping List"}} />
    </Stack>
  )
}