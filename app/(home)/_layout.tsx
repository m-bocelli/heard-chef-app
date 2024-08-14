import useAuth from "@/hooks/useAuth";
import { Redirect, Tabs } from "expo-router";

export default function HomeLayout() {
    const { user } = useAuth();

    if (!user) {
        return <Redirect href="/landing" />;
    }

    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ headerShown: false }} />
            <Tabs.Screen name="profile" options={{ headerShown: false }} />
            <Tabs.Screen name="matches" options={{ headerShown: false }} />
            <Tabs.Screen name="herd" options={{ headerShown: false }} />
        </Tabs>
    );
}
