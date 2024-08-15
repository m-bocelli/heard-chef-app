import useAuth from "@/hooks/useAuth";
import { Redirect, router } from "expo-router";
import { View, Text } from "react-native";

export default function Profile() {
    const { user, logout } = useAuth();
    return (
        <View className="flex-1 justify-center items-center bg-white">
            <Text
                onPress={() => {
                    logout();
                }}
            >
                LOGOUT
            </Text>
        </View>
    );
}
