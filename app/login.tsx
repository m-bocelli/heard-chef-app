import useAuth from "@/hooks/useAuth";
import { Link, router } from "expo-router";
import { View, Text } from "react-native";

export default function Login() {
    const { login } = useAuth();
    return (
        <View className="flex-1 gap-20 justify-center items-center">
            <Text
                onPress={() => {
                    // update user object
                    login();
                    router.replace("/");
                }}
            >
                Login
            </Text>
            <Link href="/landing">Back</Link>
        </View>
    );
}
