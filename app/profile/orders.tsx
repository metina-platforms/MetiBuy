import EditScreenInfo from "@/components/EditScreenInfo";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { Heading } from "@/components/ui/heading";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { ArrowLeftIcon, BellIcon, ChevronLeftIcon, CircleXIcon } from "lucide-react-native";
import { FlatList } from "react-native";
// import { products } from "@/lib/products.json";
import { Image } from "@/components/ui/image";
import { currencyFormatter } from "@/utils/currencyFormater";
import { HStack } from "@/components/ui/hstack";
import { Button } from "@/components/ui/button";
import { router } from "expo-router";

const orders = [
    {
        'id': 1,
        "order_id": "ORD-20250419-001",
        
        "status": "Delivered",
        "status_code": 4,
        "total_cost": 55.75,
        "tax": 4.50,
        "quantity": 2,
        "date": "2025-04-19"
    },
    {
        "id": 2,
        "order_id": "ORD-20250418-003",
        "status": "In Progress",
        "status_code": 2,
        "total_cost": 120.00,
        "tax": 9.60,
        "quantity": 5,
        "date": "2025-04-18"
    },
    {
        "id": 3,
        "order_id": "ORD-20250415-011",
        "status": "Completed",
        "status_code": 3,
        "total_cost": 32.50,
        "tax": 2.60,
        "quantity": 1,
        "date": "2025-04-15"
    },
    {
        "id": 4,
        "order_id": "ORD-20250410-008",
        "status": "Canceled",
        "status_code": 5,
        "total_cost": 88.99,
        "tax": 7.12,
        "quantity": 3,
        "date": "2025-04-10"
    },
    {
        "id": 5,
        "order_id": "ORD-20250419-002",
        "status": "In Progress",
        "status_code": 2,
        "total_cost": 15.20,
        "tax": 1.22,
        "quantity": 1,
        "date": "2025-04-19"
    },
    {
        "id": 6,
        "order_id": "ORD-20250417-005",
        "status": "Delivered",
        "status_code": 4,
        "total_cost": 210.50,
        "tax": 16.84,
        "quantity": 10,
        "date": "2025-04-17"
    }
]

export default function Orders() {
    return (
        <Box className="flex-1 bg-gray-50 dark:bg-black">
            <FlatList
                data={orders}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Box className="flex-row items-center p-4 bg-white border-b border-gray-200 rounded-md w-[95%] mx-auto my-2 dark:bg-black dark:border-gray-700">
                        {/* <Box
              className="w-16 h-16 bg-gray-200 rounded-lg"
              style={{ backgroundImage: `url(${item.thumbnail})` }}
            /> */}

                        <Box className="ml-4">
                            <Text className="text-lg font-bold">{item.order_id}</Text>
                            <Text className="text-black dark:text-white">{currencyFormatter(item.total_cost)}</Text>
                        </Box>
                        <Pressable className="ml-auto">
                            <CircleXIcon size={24} color="gray" />
                        </Pressable>
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
                                router.push("/tabs/tab3");
                            }}
                        >
                            <ChevronLeftIcon size={24} color="gray" />
                        </Pressable>

                        <Box className="p-4">
                            <Heading className="text-xl font-bold">Orders</Heading>
                            <Text className="text-gray-500">You have {orders.length} orders.</Text>
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
                    <Text className="ml-auto text-lg font-bold"> {currencyFormatter(orders.reduce((acc, item) => acc + item.total_cost, 0))}</Text>
                </HStack>
                <Button size='lg' className=" w-[95%] rounded-2xl mx-auto my-2 bg-[#f29461] dark:bg-white h-12">
                    <Text className="text-lg font-extrabold text-white">Checkout</Text>
                </Button>
            </Center>
        </Box>
    );
}
