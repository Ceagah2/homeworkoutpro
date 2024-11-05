import { tokenCache } from '@/data/tokenCache';
import { UserProvider } from '@/data/userContext';
import Routes from '@/presentation/routes';
import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-expo';
import {
  Lato_400Regular,
  Lato_700Bold,
  useFonts
} from '@expo-google-fonts/lato';
import {
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import { ActivityIndicator } from 'react-native';

export default function App(){
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
    Montserrat_400Regular,
    Montserrat_700Bold
  })
  
  if(!fontsLoaded) return <ActivityIndicator />

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <UserProvider>
          <Routes />
        </UserProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}