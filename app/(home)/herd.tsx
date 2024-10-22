import { User } from "@/constants/Types";
import useAuth from "@/hooks/useAuth";
import { HttpClient } from "@/logic/HttpClient";
import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";

export default function Herd() {
  const { user } = useAuth();
  const [members, setMembers] = useState<User[]>([]);
  const [herdName, setHerdName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const members = await HttpClient.Get(`herds/${user?.herdId}`);
        setMembers(members);
      } catch (err) {
        console.error("API: Failed to fetch herd members", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, []);

  useEffect(() => {
    const fetchHerd = async () => {
      try {
        const herd = await HttpClient.Get(`/herds?herdId=${user?.herdId}`);
        setHerdName(herd.name);
      } catch (err) {
        console.error("API: Failed to fetch herd", err);
      }
    };
    fetchHerd();
  }, []);

  return (
    <View className="flex-1 bg-white items-center gap-y-20">
      <Text
        style={{ fontFamily: "lilita-one" }}
        className="text-4xl text-purple"
      >
        {herdName}
      </Text>
      <View className="gap-y-4">
        {loading ? (
          <ActivityIndicator size="large" color="purple" />
        ) : user?.herdId ? (
          members.map((user) => (
            <View key={user.id}>
              <Text>- {user.username}</Text>
            </View>
          ))
        ) : (
          <Text>Not in a herd</Text>
        )}
      </View>
    </View>
  );
}
