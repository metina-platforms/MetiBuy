import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Input, InputField } from "@/components/ui/input";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { router } from "expo-router";
import {
  ChevronLeft,
  HelpCircleIcon
} from "lucide-react-native";
import { useState } from "react";
import { ScrollView } from "react-native";
import config from '@/config'
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { signIn, signUp } from "@/utils/auth";
// import { Link } from "@react-navigation/native";
// import { signIn } from "@/utils/auth";

// import { Link } from "@/components/ui/link";
// import { HelpCircleIcon } from "@/components/ui/icon";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {

    try {
      const response = await signIn(email, password);
      router.push('/tabs')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView>
      <Box className="flex-1 justify-center items-center ">
        <HStack className=" p-1.5 rounded-md w-full mx-auto items-center ">
          <Pressable
            className="w-10 h-10  rounded-full items-center justify-center"
            onPress={() => {
              // Handle back button press here
              console.log("Back button pressed");
              router.back()

            }}
          >
            <ChevronLeft size={24} color="gray" />
          </Pressable>

          <Box className="p-4">
            <Heading className="text-xl font-bold"></Heading>
          </Box>

          <Pressable
            className="ml-auto w-10 h-10 rounded-full items-center justify-center"
            onPress={() => {
              // Handle search button press here
              console.log("Search button pressed");
            }}
          >
            <HelpCircleIcon color="gray" />
          </Pressable>
        </HStack>

        <Box className="flex flex-col items-center w-full justify-center h-[100vh]">
          <Heading className="font-bold uppercase">Login to use {config.APP_NAME} </Heading>
          <Text className="text-gray-500 text-sm">
            Fill in your details to login.
          </Text>

          <VStack className="my-10 gap-4 items-center w-full">

            <Input className="border border-gray-300 p-2 w-96 rounded-[10px] h-[3.5rem]">
              <InputField onChangeText={(text)=> setEmail(text)} type="text" placeholder="Email or Phone" />
            </Input>

            <Input className="border border-gray-300 p-2 w-96 rounded-[10px] h-[3.5rem]">
              <InputField onChangeText={(text)=> setPassword(text)} type="password" placeholder="Password" />
            </Input>


            <Button
              onPress={handleSubmit}
              className=" bg-primary rounded-[10px] h-[3.5rem] w-96"
            >
              <Text className="text-white">Sign In</Text>
            </Button>

            <Text className="text-gray-500 text-sm">
              Don't have an account?
            </Text>
            <Button onPress={() => router.push("/auth/register")} variant="link">
              <Text className="text-primary font-bold">Create an account</Text>
            </Button>

          </VStack>
          <Box className="mt-20">
            <Text className="text-gray-300 text-sm text-center font-extrabold">
              Metina Platforms
            </Text>
          </Box>
        </Box>
      </Box>


    </ScrollView>
  );
}
