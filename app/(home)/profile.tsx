import useAuth from "@/hooks/useAuth";
import { View, Text, TouchableOpacity } from "react-native";

export default function Profile() {
    const { user, logout } = useAuth();
    return (
        <View className="flex-1 justify-between items-center bg-white">
            <Text
                className="text-purple text-4xl"
                style={{ fontFamily: "lilita-one" }}
            >
                {user?.username}
            </Text>
            <TouchableOpacity
                onPress={() => {
                    logout();
                }}
                className="bg-purple py-2 px-4 rounded-full mb-8"
            >
                <Text
                    className="text-white"
                    style={{ fontFamily: "lilita-one" }}
                >
                    LOGOUT
                </Text>
            </TouchableOpacity>
        </View>
    );
}
