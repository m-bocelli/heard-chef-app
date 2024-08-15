import MatchedModal from "@/components/matchedModal";
import RecipeCard from "@/components/recipeCard";
import { API_BASE_URL, Recipe } from "@/constants/Types";
import useAuth from "@/hooks/useAuth";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    Image,
} from "react-native";
import Swiper from "react-native-deck-swiper";

export default function Index() {
    const { user } = useAuth();
    const [feed, setFeed] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(true);
    const [showMatched, setShowMatched] = useState(false);
    const swipeRef = useRef<any>(null);

    useEffect(() => {
        getFeed();
    }, []);

    async function getFeed() {
        try {
            const res = await fetch(API_BASE_URL + "/recipes");
            const data = await res.json();
            setFeed(data);
        } catch (err) {
            console.error("Error retrieveing feed: ", err);
        } finally {
            setLoading(false);
        }
    }

    async function onRightSwipe(cardIndex: number) {
        if (!feed[cardIndex]) return;
        const recipeId = feed[cardIndex].id;
        await createLike(recipeId);
        await checkForMatch(recipeId);
    }

    async function checkForMatch(recipeId: number) {
        try {
            if (user) {
                const query = `${API_BASE_URL}/herds/checkmatch?userProfileId=${user.id}&herdId=${user.herdId}&recipeId=${recipeId}`;
                const res = await fetch(query, { method: "POST" });
                const data = await res.json();
                if (data.matched) {
                    setShowMatched(true);
                }
            }
        } catch (err) {
            console.error("API: Error checking for match", err);
        }
    }

    async function createLike(recipeId: number) {
        try {
            if (user) {
                const query = `${API_BASE_URL}/users/like?userProfileId=${user.id}&recipeId=${recipeId}`;
                const res = await fetch(query, { method: "POST" });
                const data = await res.json();
                console.debug(data);
            }
        } catch (err) {
            console.error("API: Failed to like recipe", err);
        }
    }

    async function resetAll() {
        setLoading(true);
        try {
            if (user) {
                await fetch(
                    API_BASE_URL + "/users/clearlikes?userProfileId=" + user.id,
                    { method: "DELETE" }
                );
                await fetch(
                    API_BASE_URL + "/herds/clearmatches?herdId=" + user.herdId,
                    { method: "DELETE" }
                );
                await getFeed();
            }
        } catch (err) {
            console.error("API: Failed to reset sim", err);
        } finally {
            setLoading(false);
        }
    }

    function onModalClose() {
        setShowMatched(false);
    }

    return (
        <View className="flex-1 justify-between items-center bg-white">
            <MatchedModal
                isVisible={showMatched}
                onClose={onModalClose}
            ></MatchedModal>
            {loading ? (
                <ActivityIndicator
                    size="large"
                    color="purple"
                ></ActivityIndicator>
            ) : (
                <View className="w-full">
                    <Swiper
                        ref={swipeRef}
                        onSwipedRight={(cardIndex) => onRightSwipe(cardIndex)}
                        cards={feed}
                        renderCard={(card) => {
                            return card ? (
                                <RecipeCard
                                    key={card.id}
                                    recipe={card}
                                ></RecipeCard>
                            ) : (
                                <View className="h-4/5 w-full justify-evenly items-center -mt-10 bg-slate-950 rounded-xl">
                                    <Text
                                        className="text-2xl text-white"
                                        style={{ fontFamily: "lilita-one" }}
                                    >
                                        No more recipes...
                                    </Text>
                                    <TouchableOpacity
                                        className="bg-purple px-6 py-2 rounded-full"
                                        onPress={resetAll}
                                    >
                                        <Text
                                            className="text-white text-xl"
                                            style={{ fontFamily: "lilita-one" }}
                                        >
                                            RESET
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                        cardIndex={0}
                        showSecondCard={true}
                        stackSize={3}
                        verticalSwipe={false}
                        overlayLabels={{
                            left: {
                                title: "NAH",
                                style: {
                                    label: {
                                        color: "white",
                                        backgroundColor: "#8b0000",
                                        textAlign: "right",
                                    },
                                },
                            },
                            right: {
                                title: "YES",
                                style: {
                                    label: {
                                        color: "white",
                                        backgroundColor: "#90ee90",
                                    },
                                },
                            },
                        }}
                        containerStyle={{
                            backgroundColor: "transparent",
                        }}
                    ></Swiper>
                </View>
            )}
            <View className="flex-row gap-x-16 justify-center mb-2 items-center">
                <TouchableOpacity onPress={() => swipeRef.current.swipeLeft()}>
                    <Ionicons
                        name="close-circle"
                        size={60}
                        color="darkred"
                    ></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="bookmark" size={40} color="pink"></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => swipeRef.current.swipeRight()}>
                    <Ionicons
                        name="checkmark-circle"
                        size={60}
                        color="lightgreen"
                    ></Ionicons>
                </TouchableOpacity>
            </View>
        </View>
    );
}
