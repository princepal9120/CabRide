import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name='chat' options={{ headerShown: false}}/>
      <Stack.Screen name='Home' options={{ headerShown: false}}/>
      <Stack.Screen name='profile' options={{ headerShown: false}}/>
      <Stack.Screen name='settings' options={{ headerShown: false}}/>
    </Stack>
  )
}

export default Layout