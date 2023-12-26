import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';


export interface IDashboardProps {
  handleLogout: {
    (): void
  }
}
// Define the prop types for the component
interface MyComponentProps {
  name: string;
}

const Dashboard = ({ handleLogout }: IDashboardProps) => {

  return (
    <View className='flex-1 items-center justify-center bg-red-300'>
      <Text className='text-white font-semibold p-3'>Dashboard</Text>
      <TouchableOpacity onPress={handleLogout} className='bg-white px-5 py-2 rounded-lg'><Text className="font-bold">logout</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}

export default Dashboard