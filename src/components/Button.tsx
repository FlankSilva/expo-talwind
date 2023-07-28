import { Text, TouchableOpacity } from "react-native";
import { StyledComponent } from 'nativewind'

export function Button({...rest}) {
  return (
    <StyledComponent component={TouchableOpacity} {...rest}>
      <TouchableOpacity className="h-14 bg-green-300 rounded-md items-center justify-center ">
        <Text className="text-[#fff] text-xl">
          Entrar
        </Text>
      </TouchableOpacity>
    </StyledComponent>
  )
}
