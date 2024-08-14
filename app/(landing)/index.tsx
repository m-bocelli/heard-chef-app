import { styled } from "nativewind";
import { View, Pressable, Text } from "react-native";
import { Link } from "expo-router";

export default function Index() {
    return (
        <View className="flex-1 gap-10 justify-center items-center">
            <Link href="/login" asChild>
                <Pressable>
                    <Text>Hi</Text>
                </Pressable>
            </Link>
            <Link href="/signup">Signup</Link>
        </View>
    );
}
