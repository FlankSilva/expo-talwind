import { SafeAreaView } from 'react-native-safe-area-context'

import LogoSVG from '../assets/Icons/logo.svg'

export function Home() {
  return (
    <SafeAreaView className="flex-1 items-center">
      <LogoSVG />
    </SafeAreaView>
  )
}
