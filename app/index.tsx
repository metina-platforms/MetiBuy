import React, { useEffect } from "react";

import { Box } from "@/components/ui/box";
import { ScrollView } from "react-native";
import { Text } from "@/components/ui/text";

import { Link, router } from "expo-router";
import { Button } from "@/components/ui/button";
import config from '@/config'


export default function Home() {

  return (
    <Box className="flex-1 h-[100vh] bg-white">
      <ScrollView
        style={{ height: "100%" }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Box className="flex flex-1 items-center my-16 mx-5 lg:my-24 lg:mx-32">
          <Box className="gap-10 base:flex-col sm:flex-row justify-between sm:w-[80%] md:flex-1">
            <Box className="bg-background-template py-2 px-6 rounded-full items-center flex-column md:flex-row md:self-start"></Box>
            <Link href="/tabs">
              <Box className="bg-background-template py-2 px-6 rounded-full items-center flex-column sm:flex-row md:self-start">
              </Box>
            </Link>
          </Box>
          <Box className="flex-1 justify-center items-center h-[20px] w-[300px] lg:h-[160px] lg:w-[400px]">
            <Text className="text-black font-extrabold text-2xl">
              {config.APP_NAME}
            </Text>
            {/* <Logo /> */}
          </Box>

          <Box className="flex-column md:flex-row w-full gap-4">
            <Button
              onPress={() => {
                router.push("/auth/register");
              }}
              className=" bg-white border-2 border-primary rounded-[10px] h-[3.5rem]"
            >
              <Text className="text-primary font-extrabold">Register</Text>
            </Button>

            <Button
              onPress={() => {
                router.push("/auth/login");
              }}
              className=" bg-primary rounded-[10px] h-[3.5rem] "
            >
              <Text className="text-white font-extrabold">Login</Text>
            </Button>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}
