import EditScreenInfo from "@/components/EditScreenInfo";
import { View } from "@/components/Themed";
import { Avatar, AvatarFallbackText, AvatarImage } from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ChevronRightIcon, LogOutIcon } from 'lucide-react-native';
import { RelativePathString } from "expo-router";
import { getCurrentUser } from "@/utils/auth";
import { updateProfile, User } from "firebase/auth";

const options = [
  {
    id: 1,
    title: "Orders",
    icon: "shopping-bag",
    path: "/profile/orders",
  },
  {
    id: 2,
    title: "Tracking",
    icon: "star-o",
    path: "/profile/tracking",
  },
  {
    id: 3,
    title: "Payment",
    icon: "credit-card",
    path: "/profile/payment",
  },
  {
    id: 4,
    title: "Settings",
    icon: "cog",
    path: "/profile/settings",
  },
];

function Icon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}

// import { useRouter } from "expo-router";

export default function ProfileTab() {
  const [user, setUser] = useState<User | null>()

  useEffect(() => {
    (async () => {
      const user = await getCurrentUser()
      //   if(user)
      //     await updateProfile(user, {
      //   displayName: "Martin Tembo",
      // });
      setUser(user)
      // console.log("USER: ",user)
    })();

  }, [])

  const router = useRouter();
  return (
    <Center className="flex-1 bg-gray-50 dark:bg-black">


      <Box className=" flex flex-col items-center justify-center ">
        <Avatar>
          <AvatarImage
            source={{
              uri: "https://i.pravatar.cc/800?img=32",
            }}
            className="h-32 w-32"
            alt="Avatar"
          />
          <AvatarFallbackText
            className="h-24 w-24"
            size="lg"
          >
            <Text className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              User
            </Text>

          </AvatarFallbackText>
        </Avatar>

        <Box className="mt-10 flex flex-col items-center justify-center ">
          <Text className="text-4xl text-black dark:text-gray-400 font-extrabold ">
            {user?.displayName}
          </Text>

          <Text className="text-sm text-black dark:text-gray-400 text-center">
            {user?.email}
          </Text>
        </Box>

        {/* List of options e.g Orders, Favorites, Payment and Settings */}
        <Box className="justify-center h-80 w-[90%] bg-inherit dark:bg-black">
          <VStack space="md" reversed={false}>
            {options.map((option) => (
              <Pressable
                key={option.id}
                className="flex-row items-center justify-between p-4 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700 w-full rounded-md"
                onPress={() => {
                  // Handle option press
                  console.log(`Pressed ${option.title}`);
                  // Navigate to the corresponding screen
                  router.push(option.path as RelativePathString);

                }}
              >
                <Text className="text-lg text-black dark:text-gray-400 font-semibold">
                  {option.title}
                </Text>
                <ChevronRightIcon size={24} color={'gray'} />
              </Pressable>
            ))}

            <Pressable
              className="flex-row items-center justify-between p-4 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700 w-full rounded-md"
              onPress={() => {
                // Handle option press
                // console.log(`Pressed ${option.title}`);
                // Navigate to the corresponding screen
                // router.push(option.path as RelativePathString);

              }}
            >
              <Text className="text-lg  dark:text-gray-400 font-semibold text-red-400">
                Logout
              </Text>
              <LogOutIcon size={24} color={'gray'} />
            </Pressable>
          </VStack>
        </Box>
      </Box>
    </Center>
  );
}
