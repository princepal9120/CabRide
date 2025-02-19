
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false,}}/>
      <Stack.Screen name='(root)' options={{ headerShown: false,}}/>
      <Stack.Screen name='(auth)' options={{ headerShown: false,}}/>
      <Stack.Screen name='+not-found' />

    </Stack>
  )
}

export default RootLayout;
