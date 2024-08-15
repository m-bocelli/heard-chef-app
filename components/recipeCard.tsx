import { LinearGradient } from "expo-linear-gradient";
import { View, Text, ImageBackground } from "react-native";

export default function RecipeCard({ recipe }: { recipe: RecipeCard }) {
    return (
        <View className="bg-black h-5/6 w-full rounded-md justify-center items-center">
            <ImageBackground
                source={{
                    uri: "https://legacy.reactjs.org/logo-og.png",
                }}
                className="w-full h-full justify-end"
            >
                <LinearGradient colors={["transparent", "white"]}>
                    <View className="ml-4 py-4">
                        <View className="bg-purple w-10 rounded-xl p-1">
                            <Text className="text-magenta text-center font-bold">
                                {recipe.Rating}/5
                            </Text>
                        </View>
                        <View className="flex-row items-center gap-x-4">
                            <Text className="text-white text-lg  font-bold w-2/5">
                                {recipe.Title}
                            </Text>
                            <Text className="text-white text-lg">
                                {recipe.NetTime}min
                            </Text>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}
