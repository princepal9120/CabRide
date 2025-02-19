import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { InputFieldProps } from '@/types/type'

const InputField = ({label,labelStyle}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback>
        <View className='my-2 w-full'>
<Text className={`text-lg font-JakartaSemiBold mb-3
   ${labelStyle}`}>{label}</Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default InputField