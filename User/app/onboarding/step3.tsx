import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Step3() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Step 3: Get Started!</Text>
      <Button title="Finish ✅" onPress={() => router.replace("/choice")} />
    </View>
  );
}
