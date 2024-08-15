import { View, Pressable, Text, Image } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Landing() {
    return (
        <SafeAreaView className="flex-1 justify-between items-center">
            <View>
                <Image
                    source={require("../assets/images/logo.png")}
                    style={{ height: 1000 / 5, width: 1022 / 5 }}
                ></Image>
            </View>
            <View className="flex-row gap-x-16 pb-6">
                <Link href="/login" asChild>
                    <Pressable className="bg-purple p-6 rounded-md">
                        <Text
                            className="text-white text-lg tracking-wider"
                            style={{ fontFamily: "lilita-one" }}
                        >
                            LOGIN
                        </Text>
                    </Pressable>
                </Link>
                <Link href="/signup" asChild>
                    <Pressable className="bg-purple p-6 rounded-md">
                        <Text
                            className="text-white text-lg tracking-wider"
                            style={{ fontFamily: "lilita-one" }}
                        >
                            SIGNUP
                        </Text>
                    </Pressable>
                </Link>
            </View>
        </SafeAreaView>
    );
}
