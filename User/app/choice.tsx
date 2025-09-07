import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function ChoicePage() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Who are you?</Text>

      <Button 
        title="👤 I’m a User (Searching Dorms)" 
        onPress={() => router.push("/Auth/logIn")} 
      />

      <Button 
        title="🏠 I’m a Dorm Owner" 
        onPress={() => router.push("/Auth/logIn")} 
      />
    </View>
  );
}
