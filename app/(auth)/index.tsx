import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 justify-between items-center">
      <View className="items-center gap-y-12">
        <Image
          source={require("../../assets/images/logo.png")}
          style={{ height: 1000 / 5, width: 1022 / 5 }}
        ></Image>
        <Text
          className="text-orange text-4xl"
          style={{ fontFamily: "lilita-one" }}
        >
          What's for dinner?
        </Text>
      </View>
      <View className="gap-y-6 mb-3 w-72">
        <Text className="text-orange text-center">
          <Text className="font-bold">Warning:</Text> This is only a demo, some
          features may be incomplete.
        </Text>
        <Link push href="/signup" asChild>
          <TouchableOpacity className="bg-purple rounded-xl py-1">
            <Text
              className="text-white text-lg tracking-wider text-center"
              style={{ fontFamily: "lilita-one" }}
            >
              SIGNUP
            </Text>
          </TouchableOpacity>
        </Link>
        <Link push href="/login" asChild>
          <TouchableOpacity className="bg-purple rounded-xl py-1">
            <Text
              className="text-white text-lg tracking-wider text-center"
              style={{ fontFamily: "lilita-one" }}
            >
              LOGIN
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}
