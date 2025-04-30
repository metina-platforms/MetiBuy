import VerificationCodeModal from "@/components/modals/VerificationCodeModal";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Input, InputField } from "@/components/ui/input";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Link, router } from "expo-router";
import { Spinner } from "@/components/ui/spinner"
import colors from "tailwindcss/colors"
import {
  ArrowUpLeftIcon,
  BellIcon,
  ChevronLeft,
  View, WifiOffIcon,
} from "lucide-react-native";
import { useState } from "react";
import { ScrollView } from "react-native";
import ErrorModal from "@/components/modals/ErrorModal";



export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showVerificationModal, setShowVerification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorModal, setErrorModal] = useState({ isOpen: false, title: "", description: "", icon: <WifiOffIcon size={24} color="red" />});
  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      // router.push("/auth/login");
      setIsLoading(false);
      setShowVerification(true);
    } catch (error) {
      // console.error(error);
      setIsLoading(false);
      setErrorModal({ isOpen: true, title: "Error", description: (error as Error).message, icon: <WifiOffIcon size={24} color="red" />});
    }
  };

  return (
    <>
      <ErrorModal
        isOpen={errorModal.isOpen}
        onClose={() => setErrorModal({ isOpen: false, title: "", description: "", icon: <WifiOffIcon size={24} color="red" />})}
        title={errorModal.title}
        description={errorModal.description}
        icon={<WifiOffIcon size={24} color="red" />}
      />
    {isLoading && 
    <Box className="flex-1 justify-center items-center bg-opacity-50 ">
      <Spinner size="small" color={colors.gray[500]} />
    </Box>
    }
    {!isLoading && (
    <ScrollView>
      <Box className="flex-1 justify-center items-center">
        <HStack className="bg-white p-1.5 rounded-md w-full mx-auto items-center ">
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
            <BellIcon size={24} color="gray" />
          </Pressable>
        </HStack>
        <Box className="flex flex-col items-center w-full justify-start h-[100vh] gap-10">
          <VStack>
          <Heading className="font-bold uppercase">Create Your ProfilE</Heading>
          <Text className="text-gray-500 text-sm">
            Fill in your details to create your profile.
          </Text>

          </VStack>

          <VStack className="my-10 gap-4 items-center w-full">
            <Input className="border border-gray-300 p-2 w-96 rounded-[10px] h-[3.5rem]">
              <InputField placeholder="Name" />
            </Input>

            <Input className="border border-gray-300 p-2 w-96 rounded-[10px] h-[3.5rem]">
              <InputField placeholder="Phone" />
            </Input>

            <Input className="border border-gray-300 p-2 w-96 rounded-[10px] h-[3.5rem]">
              <InputField placeholder="Email" />
            </Input>

            <Input className="border border-gray-300 p-2 w-96 rounded-[10px] h-[3.5rem]">
              <InputField placeholder="Password" />
            </Input>

            <Input className="border border-gray-300 p-2 w-96 rounded-[10px] h-[3.5rem]">
              <InputField placeholder="Confirm Password" />
            </Input>

            <Button
              onPress={() => handleSubmit()}
              className=" bg-primary rounded-[10px] h-[3.5rem] w-96 "
            >
              <Text className="text-white">Create Account</Text>
            </Button>

            <Text className="text-gray-500 text-sm">
              Already have an account?
            </Text>
            <Button onPress={() => router.push("/auth/login")} variant="link">
              <Text className="text-primary font-bold">Login</Text>
            </Button>

          </VStack>
        </Box>
      </Box>
      <Spinner size="small" color={colors.gray[500]} />

      <VerificationCodeModal
        onClose={() => setShowVerification(false)}
        isOpen={showVerificationModal}
      />

      <Box>
        <Text className="text-gray-500 text-sm">
          Metina
        </Text>
      </Box>
    </ScrollView>
    )}
    </>
  );
}
