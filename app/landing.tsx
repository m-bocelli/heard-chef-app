import { View, Pressable, Text } from "react-native";
import { Link } from "expo-router";
import useAuth from "@/hooks/useAuth";

export default function Landing() {
    const { user } = useAuth();
    return (
        <View className="flex-row flex-1 gap-12 justify-center items-center">
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
    );
}
