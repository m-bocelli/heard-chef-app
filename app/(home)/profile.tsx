import useAuth from "@/hooks/useAuth";
import { HttpClient } from "@/logic/HttpClient";
import { View, Text, TouchableOpacity } from "react-native";

export default function Profile() {
  const { user, logout } = useAuth();

  async function clearLikes() {
    try {
      if (user) {
        await HttpClient.Delete(`users/clearlikes?userProfileId=${user.id}`);
      }
    } catch (err) {
      console.error("API: Failed to clear likes", err);
    }
  }

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
        <Text className="text-white" style={{ fontFamily: "lilita-one" }}>
          LOGOUT
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={clearLikes}
        className="bg-purple py-2 px-4 rounded-full mb-8"
      >
        <Text className="text-white" style={{ fontFamily: "lilita-one" }}>
          CLEAR LIKES
        </Text>
      </TouchableOpacity>
    </View>
  );
}
