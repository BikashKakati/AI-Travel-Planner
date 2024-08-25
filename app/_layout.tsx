import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="(tabs)" options={{headerShown:false}} />
      <Stack.Screen name="select-days/index" options={{headerTitle:"Select Days"}}/>
      <Stack.Screen name="+not-found"/>
    </Stack>
  );
}
