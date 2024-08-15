import useAuth from "@/hooks/useAuth";
import { Redirect, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Image, View, Text } from "react-native";

export default function HomeLayout() {
    const { user } = useAuth();

    if (!user) {
        return <Redirect href="/(auth)/" />;
    }

    return (
        <Tabs
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    height: 80,
                    borderTopWidth: 0,
                },
                tabBarIcon: (props) => {
                    let iconName: any = "person-outline";
                    switch (route.name) {
                        case "profile":
                            iconName = "person-outline";
                            break;
                        case "index":
                            iconName = "pizza-outline";
                            break;
                        case "matches":
                            iconName = "bookmarks-outline";
                            break;
                        case "herd":
                            iconName = "people-outline";
                            break;
                        default:
                            break;
                    }

                    if (props.focused) {
                        iconName = iconName.replace("-outline", "");
                    }

                    return (
                        <View className="pt-1">
                            <Ionicons
                                name={iconName}
                                size={30}
                                color={"purple"}
                            />
                        </View>
                    );
                },
                title: "",
                headerShown: true,
                headerLeft: () => (
                    <View className="flex-1 flex-row items-center gap-x-2 ml-3">
                        <Image
                            source={require("../../assets/images/icon-borderless.png")}
                            style={{ width: 887 / 30, height: 1000 / 30 }}
                        />
                        <Text
                            style={{ fontFamily: "lilita-one", fontSize: 24 }}
                        >
                            HEARD!
                        </Text>
                    </View>
                ),
                headerRight: () => (
                    <View className="flex-1 flex-row items-center mr-3">
                        <Ionicons
                            name="notifications-circle"
                            size={40}
                            color="purple"
                        ></Ionicons>
                    </View>
                ),
            })}
        >
            <Tabs.Screen name="feed" />
            <Tabs.Screen name="matches" />
            <Tabs.Screen name="herd" />
            <Tabs.Screen name="profile" />
        </Tabs>
    );
}
