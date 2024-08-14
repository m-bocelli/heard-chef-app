import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Login() {
    return (
        <View className="flex-1 justify-center items-center">
            <Text>Login</Text>
            <Link href={"/"}>Back</Link>
        </View>
    );
}
