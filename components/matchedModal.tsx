import { View, Text, Modal, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MatchedModal({
    isVisible,
    onClose,
}: {
    isVisible: boolean;
    onClose: () => void;
}) {
    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <SafeAreaView className="h-full justify-center items-center bg-purple opacity-80">
                <View className="items-center w-2/3">
                    <Text
                        className="text-white text-4xl"
                        style={{ fontFamily: "lilita-one" }}
                    >
                        Matched!
                    </Text>
                    <Text
                        className="text-white text-xl text-center"
                        style={{ fontFamily: "lilita-one" }}
                    >
                        You and someone in your herd both want to try this
                        recipe.
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={onClose}
                    className="px-6 py-2 bg-orange rounded-full mt-8"
                >
                    <Text
                        style={{ fontFamily: "lilita-one" }}
                        className="text-white"
                    >
                        CLOSE
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </Modal>
    );
}
