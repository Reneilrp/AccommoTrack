import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function LandingPage() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome to My App 🚀</Text>
      
      <Button title="Next ➡️" onPress={() => router.push("/onboarding/step1")} />
    </View>
  );
}