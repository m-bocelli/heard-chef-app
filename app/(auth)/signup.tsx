import useAuth from "@/hooks/useAuth";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
    View,
    Text,
    Pressable,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Signup() {
    const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    function updateUsername(username: string) {
        setUsername(username);
    }

    function updateEmail(email: string) {
        setEmail(email);
    }

    function updatePassword(password: string) {
        setPassword(password);
    }

    function validate() {
        return (
            username.length &&
            email.length &&
            password.length &&
            password === confirmedPassword
        );
    }

    return (
        <SafeAreaView className="flex-1 gap-y-20 justify-center items-center">
            <View className="gap-y-6 w-60">
                <View>
                    <Text
                        style={{ fontFamily: "lilita-one" }}
                        className="text-lg text-purple"
                    >
                        USERNAME
                    </Text>
                    <TextInput
                        textAlign="center"
                        style={{ borderWidth: 2, borderRadius: 5 }}
                        className="border-purple p-4"
                        onChangeText={updateUsername}
                        value={username}
                    ></TextInput>
                </View>
                <View>
                    <Text
                        style={{ fontFamily: "lilita-one" }}
                        className="text-lg text-purple"
                    >
                        EMAIL
                    </Text>
                    <TextInput
                        textAlign="center"
                        style={{ borderWidth: 2, borderRadius: 5 }}
                        className="border-purple p-4"
                        placeholder="i.e. example@gmail.com"
                        onChangeText={updateEmail}
                        value={email}
                    ></TextInput>
                </View>
                <View>
                    <Text
                        style={{ fontFamily: "lilita-one" }}
                        className="text-lg text-purple"
                    >
                        PASSWORD
                    </Text>
                    <TextInput
                        textAlign="center"
                        style={{ borderWidth: 2, borderRadius: 5 }}
                        className="border-purple p-4"
                        secureTextEntry={true}
                        onChangeText={updatePassword}
                        value={password}
                    ></TextInput>
                </View>
                <View style={{ opacity: password.length ? 1 : 0.2 }}>
                    <Text
                        style={{ fontFamily: "lilita-one" }}
                        className="text-lg text-purple"
                    >
                        CONFIRM PASSWORD
                    </Text>
                    <TextInput
                        editable={password.length > 0}
                        textAlign="center"
                        style={{
                            borderWidth: 2,
                            borderRadius: 5,
                        }}
                        className="border-purple p-4"
                        secureTextEntry={true}
                        onChangeText={(text) => setConfirmedPassword(text)}
                        value={confirmedPassword}
                    ></TextInput>
                </View>
            </View>

            <View className="flex-row gap-x-12">
                <Link href="/" asChild>
                    <TouchableOpacity className="bg-purple px-6 py-3 rounded-md">
                        <Text
                            className="text-white text-lg tracking-wider"
                            style={{ fontFamily: "lilita-one" }}
                        >
                            BACK
                        </Text>
                    </TouchableOpacity>
                </Link>
                <TouchableOpacity
                    style={{ opacity: validate() ? 1 : 0.2 }}
                    className="bg-purple px-6 py-3 rounded-md"
                    onPress={() => {
                        if (validate()) {
                            login(email.toLowerCase(), confirmedPassword);
                        }
                    }}
                >
                    <Text
                        className="text-white text-lg tracking-wider"
                        style={{ fontFamily: "lilita-one" }}
                    >
                        SIGNUP
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
