import { Recipe } from "@/constants/Types";
import useAuth from "@/hooks/useAuth";
import { HttpClient } from "@/logic/HttpClient";
import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";

export default function Matches() {
  const [herdName, setHerdName] = useState("");
  const [matches, setMatches] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchHerd = async () => {
      try {
        const data = await HttpClient.Get(`herds?herdId=${user?.herdId}`);
        setHerdName(data.name);
      } catch (err) {
        console.error("API: Failed to fetch herd", err);
      }
    };
    fetchHerd();
  }, []);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const data = await HttpClient.Get(
          `herds/matches?herdId=${user?.herdId}`
        );
        setMatches(data);
      } catch (err) {
        console.error("API: Failed to fetch herd", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMatches();
  }, [matches]);

  async function clearMatches() {
    try {
      await HttpClient.Delete(`herds/clearmatches?herdId=${user?.herdId}`);
      setMatches([]);
    } catch (err) {
      console.error("API: Failed to fetch herd", err);
    }
  }

  return (
    <View className="flex-1 bg-white items-center justify-between gap-y-6">
      <Text
        className="text-4xl text-purple"
        style={{ fontFamily: "lilita-one" }}
      >
        {loading ? "" : herdName + "'s Matches"}
      </Text>
      <View className="gap-6">
        {loading ? (
          <ActivityIndicator color="purple" size="large" />
        ) : (
          matches.map((recipe) => {
            return (
              <View key={recipe.id}>
                <Text className="text-center">{recipe.title}</Text>
              </View>
            );
          })
        )}
      </View>
      <TouchableOpacity
        onPress={clearMatches}
        className="bg-purple py-2 px-4 rounded-full mb-8"
      >
        <Text className="text-white" style={{ fontFamily: "lilita-one" }}>
          CLEAR
        </Text>
      </TouchableOpacity>
    </View>
  );
}
