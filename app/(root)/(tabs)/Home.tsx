import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView>
      <Text>hello home</Text>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})