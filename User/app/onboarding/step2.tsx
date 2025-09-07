import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Step2() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Step 2: Features</Text>
      <Button title="Next ➡️" onPress={() => router.push("/onboarding/step3")} />
    </View>
  );
}
