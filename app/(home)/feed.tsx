import RecipeCard from "@/components/recipeCard";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { View, Text, Button, Pressable } from "react-native";

export default function Index() {
    const [feed, setFeed] = useState<RecipeCard[]>([
        {
            Id: 1,
            Title: "Parma Rosa Penne with Basil",
            Image: "https://pastatwins.com/wp-content/uploads/2022/03/Pink-Pasta-Sauce-12.jpg",
            NetTime: 20,
            Rating: 5,
            NumReviews: 2468,
        },
    ]);
    const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     const getFeed = async () => {
    //         try {
    //             const res = await fetch("https://localhost:7036/api/recipes");
    //             const data = await res.json();
    //             setFeed(data);
    //         } catch (err) {
    //             console.error("Error retrieveing feed: ", err);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     getFeed();
    // }, []);

    return (
        <View className="flex-1 justify-between items-center bg-white">
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <>
                    <RecipeCard recipe={feed[0]}></RecipeCard>
                    <View className="flex-row h-1/6 w-full items-center justify-center gap-x-16">
                        <Pressable>
                            <Ionicons
                                name="close-circle"
                                size={60}
                                color="darkred"
                            ></Ionicons>
                        </Pressable>
                        <Pressable>
                            <Ionicons
                                name="bookmark"
                                size={40}
                                color="pink"
                            ></Ionicons>
                        </Pressable>
                        <Pressable>
                            <Ionicons
                                name="checkmark-circle"
                                size={60}
                                color="lightgreen"
                            ></Ionicons>
                        </Pressable>
                    </View>
                </>
            )}
        </View>
    );
}
