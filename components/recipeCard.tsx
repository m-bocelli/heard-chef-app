import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image } from "react-native";
import { Recipe } from "@/constants/Types";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
    return (
        <View className="h-4/5 w-full justify-center items-center -mt-10">
            <Image
                source={{
                    uri: "https://images.esquiremag.ph/esquiremagph/images/2023/08/04/IMG_3546%20(1).PNG",
                }}
                className="w-full h-full justify-end rounded-xl"
            />
            <View className="absolute bottom-0 w-full">
                <LinearGradient colors={["transparent", "white"]}>
                    <View className="flex-row items-center gap-2 pl-6">
                        <View className="bg-purple w-12 rounded-xl p-1">
                            <Text className="text-magenta text-center font-bold">
                                {recipe.rating}/5
                            </Text>
                        </View>
                        <Text className="text-white">
                            {recipe.numReviews} reviews
                        </Text>
                    </View>
                    <View className="flex-row items-start gap-x-8 pl-6 pb-6">
                        <Text className="text-white text-lg  font-bold w-2/5">
                            {recipe.title}
                        </Text>
                        <Text className="text-white text-lg">
                            {recipe.netTime}min
                        </Text>
                    </View>
                </LinearGradient>
            </View>
        </View>
    );
}
