import { Colors } from "@/constants/Colors";
import useAuth from "@/hooks/useAuth";
import { Link } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const { user, login, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function updateEmail(email: string) {
    setEmail(email);
  }

  function updatePassword(password: string) {
    setPassword(password);
  }

  return (
    <SafeAreaView className="flex-1 gap-y-20 justify-center items-center">
      <View className="gap-y-5 w-60">
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
        {loading ? (
          <ActivityIndicator size="large" color={Colors["light"].purple} />
        ) : (
          <TouchableOpacity
            className="bg-purple px-6 py-3 rounded-md"
            onPress={() => {
              login(email.toLowerCase(), password);
            }}
          >
            <Text
              className="text-white text-lg tracking-wider"
              style={{ fontFamily: "lilita-one" }}
            >
              LOGIN
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}
