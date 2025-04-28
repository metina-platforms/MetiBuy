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
import { Link } from "@react-navigation/native";
// import { Link } from "@/components/ui/link";
// import { HelpCircleIcon } from "@/components/ui/icon";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      router.push("/auth/login");
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
              <InputField type="text" placeholder="Email or Phone" />
            </Input>

            <Input className="border border-gray-300 p-2 w-96 rounded-[10px] h-[3.5rem]">
              <InputField type="password" placeholder="Password" />
            </Input>


            <Button
              onPress={() => {
                // router.push("/auth/login");
              }}
              className=" bg-primary rounded-[10px] h-[3.5rem] w-96"
            >
              <Text className="text-white">Sign In</Text>
            </Button>

            <Text className="text-gray-500 text-sm">
              Don't have an account?
            </Text>
            <Link action={{ type: "/auth/register", source: "/auth/register",target: "/auth/register" }}>
              <Text className="text-primary font-bold">Create an account</Text>
            </Link>

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
