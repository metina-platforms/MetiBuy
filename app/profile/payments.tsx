import { Text, View } from "@/components/Themed";


export default function Payments() {
  return (
    <View className="flex-1 bg-gray-50 dark:bg-black">
      <Text className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Orders
      </Text>
      <Text className="text-lg text-gray-500 dark:text-gray-400">
        No orders yet
      </Text>
    </View>
  );
}