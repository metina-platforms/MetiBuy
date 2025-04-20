import EditScreenInfo from "@/components/EditScreenInfo";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { ArrowLeftIcon, BellIcon, CircleXIcon } from "lucide-react-native";
import { FlatList } from "react-native";
import { carts } from "@/lib/carts.json";
import { Image } from "@/components/ui/image";
import { currencyFormatter } from "@/utils/currencyFormater";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionContentText,
  AccordionIcon,
  AccordionContent,
} from "@/components/ui/accordion"
import { ChevronUpIcon, ChevronDownIcon } from "@/components/ui/icon"

export default function Tab2() {
  return (
    <Box className="flex-1 bg-gray-50 dark:bg-black">
      <FlatList
        data={carts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Box className="flex-row items-center p-4 bg-white border-b border-gray-200 rounded-md w-[95%] mx-auto my-2 dark:bg-black dark:border-gray-700">
            {/* <Box
              className="w-16 h-16 bg-gray-200 rounded-lg"
              style={{ backgroundImage: `url(${item.thumbnail})` }}
            /> */}
            <Accordion>
              <AccordionItem value="item-1">
                <AccordionHeader>
                  <AccordionTrigger>
                    <AccordionTitleText>
                      Products {item.totalQuantity} {item.total}
                    </AccordionTitleText>
                    <AccordionIcon />
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionContentText>
                    <FlatList
                      renderItem={({ item }) => (
                        <Box className="flex-row items-center p-4 bg-white border-b border-gray-200 rounded-md w-[95%] mx-auto my-2 dark:bg-black dark:border-gray-700">
                          <Image
                            source={{ uri: item.thumbnail }}
                            className="w-24 h-24 rounded-lg"
                            alt={item.title}
                            style={{ resizeMode: "cover" }}
                          />
                          <Box className="ml-4">
                            <Text className="text-lg font-bold">{item.title}</Text>
                            <Text className="text-black dark:text-white">
                              {currencyFormatter(item.price)}
                              {" "}-{" "}
                              <Text className="text-gray text-gray-600 dark:text-white line-through">{item.discountedTotal} </Text>
                            </Text>
                            <HStack>
                              <Text className="text-black dark:text-white">Quantity: {item.quantity}</Text>
                            </HStack>
                          </Box>
                          {/* <Pressable className="ml-auto">
                            <CircleXIcon size={24} color="gray" />
                          </Pressable> */}
                        </Box>
                      )}
                      data={item.products}
                      keyExtractor={(item) => item.id.toString()}
                      showsVerticalScrollIndicator={false}
                      showsHorizontalScrollIndicator={false}
                      stickyHeaderIndices={[0]}
                      nestedScrollEnabled={true}
                      scrollEventThrottle={16}

                    />
                  </AccordionContentText>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/* 
            <Image
              source={{ uri: item.thumbnail }}
              className="w-24 h-24 rounded-lg"
              alt={item.title}
              style={{ resizeMode: "cover" }}
            />
            <Box className="ml-4">
              <Text className="text-lg font-bold">{item.title}</Text>
              <Text className="text-black dark:text-white">{currencyFormatter(item.price)}</Text>
            </Box>
            <Pressable className="ml-auto">
              <CircleXIcon size={24} color="gray" />
            </Pressable> */}
          </Box>
        )}
        // ItemSeparatorComponent={() => (
        //   <Divider className="" />
        // )}
        ListHeaderComponent={() => (
          <HStack className="bg-white p-1.5 rounded-md w-full mx-auto items-center ">
            <Pressable
              className="w-10 h-10  rounded-full items-center justify-center"
              onPress={() => {
                // Handle back button press here
                console.log("Back button pressed");
              }}
            >
              <ArrowLeftIcon size={24} color="gray" />
            </Pressable>

            <Box className="p-4">
              <Heading className="text-xl font-bold">My Cart</Heading>
              <Text className="text-gray-500">You have {carts.length} items in your cart.</Text>
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
        )}
        ListEmptyComponent={() => (
          <Center className="flex-1">
            <Text className="text-gray-500">Your cart is empty.</Text>
          </Center>
        )}
        ListFooterComponent={() => (
          <Box className="p-4">
            <Text className="text-lg font-bold">Total: $60.00</Text>
          </Box>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        nestedScrollEnabled={true}
        scrollEventThrottle={16}
        onScroll={(event) => {
          // Handle scroll events here
          console.log(event.nativeEvent.contentOffset.y);
        }
        }
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          // Handle load more here
          console.log("Load more items");
        }
        }
        onRefresh={() => {
          // Handle refresh here
          console.log("Refresh items");
        }
        }
        refreshing={false}
        onMomentumScrollBegin={() => {
          // Handle momentum scroll begin here
          console.log("Momentum scroll begin");
        }
        }
        onMomentumScrollEnd={() => {
          // Handle momentum scroll end here
          console.log("Momentum scroll end");
        }
        }
        onScrollBeginDrag={() => {
          // Handle scroll begin drag here
          console.log("Scroll begin drag");
        }
        }
        onScrollEndDrag={() => {
          // Handle scroll end drag here
          console.log("Scroll end drag");
        }
        }
        onScrollToTop={() => {
          // Handle scroll to top here
          console.log("Scroll to top");
        }
        }
      />

      <Center className="bg-white flex ">
        <HStack className="p-4 rounded-md w-[95%] mx-auto my-2">
          <Text className="text-lg font-bold">Subtotal</Text>
          <Text className="ml-auto text-lg font-bold"> {currencyFormatter(carts[0].products.reduce((acc, item) => acc + item.price, 0))}</Text>
        </HStack>
        <Button size='lg' className=" w-[95%] rounded-2xl mx-auto my-2 bg-[#f29461] dark:bg-white h-12">
          <Text className="text-lg font-extrabold text-white">Checkout</Text>
        </Button>
      </Center>
    </Box>
  );
}
