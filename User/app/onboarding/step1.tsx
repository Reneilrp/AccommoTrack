import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Step1() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Step 1: Introduction</Text>
      <Button title="Next ➡️" onPress={() => router.push("//step2")} />
    </View>
  );
}