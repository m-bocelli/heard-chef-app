import useAuth from "@/hooks/useAuth";
import { View, Text } from "react-native";

export default function Profile() {
    const { logout } = useAuth();
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
