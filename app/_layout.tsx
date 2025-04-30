import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useColorScheme } from "@/components/useColorScheme";
import { Slot } from "expo-router";

import "../global.css";
import { auth } from "@/utils/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { AuthProvider } from "@/components/AuthProvider";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "gluestack",
// };

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  const [styleLoaded, setStyleLoaded] = useState(false);
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // useLayoutEffect(() => {
  //   setStyleLoaded(true);
  // }, [styleLoaded]);

  // if (!loaded || !styleLoaded) {
  //   return null;
  // }


    const [user, setUser] = useState<User | null>(null);
    const [loadingInitialState, setLoadingInitialState] = useState(true);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (authUser) => {
        if (authUser) {
          // User is signed in
          setUser(authUser);
        } else {
          // User is signed out
          setUser(null);
        }
        setLoadingInitialState(false);
      });
  
      // Unsubscribe from the listener when the component unmounts
      return unsubscribe;
    }, [auth]);


  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <AuthProvider>
      <GluestackUIProvider mode={colorScheme === "dark" ? "dark" : "light"}>
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
          <Slot />
        </ThemeProvider>
      </GluestackUIProvider>
    </AuthProvider>
  );
}
