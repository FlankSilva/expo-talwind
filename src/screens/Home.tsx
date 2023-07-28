import { Text, View, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons'
import { Button } from "../components/Button";
import { ToggleTheme } from "../components/ToggleTheme";


export function Home() {
  return (
    <View className="flex-1 items-center justify-center dark:bg-[#000] light:bg-minhacor-200 px-8">
      <ToggleTheme />
      <Feather name="home" size={34} color={'white'} />


      <Text className="dark:text-minhacor-200 light:text-[#000] text-2xl font-bold mt-4">
        NativeWind
      </Text>

      <TextInput  className="w-full h-12 border border-[#fff] rounded-md px-2 text-minhacor-200 focus:border-[#e67e22]"/>
      <TextInput  className="w-full h-12 border border-[#fff] rounded-md px-2 text-minhacor-200 focus:border-[#e67e22]"/>

      <Button className="w-full mt-8" />
    </View>
  )
}