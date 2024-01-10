import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
const envSecret = process.env.SECRET


export interface ILoginProps {
    handleLogin: {
        (): void
    }
}

const LoginScreen = ({ handleLogin }: ILoginProps) => {

    return (
        <View className='flex-1 items-center justify-center bg-blue-300'>
            <Text className='text-white italic antialiased p-3'>Welcome to the helloapp made with react native, expo, typescript and tailwind 🚀</Text>
            <Text>Env is {envSecret}</Text>
            <TouchableOpacity onPress={handleLogin} className='bg-white px-5 py-2 rounded-lg'><Text className="font-bold">login</Text></TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    )
}

export default LoginScreen