import { View, Text, Switch } from 'react-native'
import { useColorScheme } from 'nativewind'

export function ToggleTheme() {
  const { colorScheme, toggleColorScheme } = useColorScheme()

  return (
    <View className='flex-row items-center '>
      <Text className='text-[#f1c40f]'>Dark</Text>
        <Switch 
          trackColor={{ true: 'blue', false: 'gray'}}
          onValueChange={toggleColorScheme}
          thumbColor={colorScheme === 'light' ? 'blue' : 'gray' }
          value={colorScheme === 'light'}
        />
      <Text className='text-[#3498db]'>Light</Text>
    </View>
  )
}