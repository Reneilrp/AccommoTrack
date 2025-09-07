import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function UserDashboard() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>👤 User Dashboard</Text>

      <Button title="Browse Dorms 🏘️" onPress={() => router.push("/User/DormList")} />

      <Button title="Book a Dorm 🛏️" onPress={() => router.push("/User/BookDorm")} />

      <Button title="Log Out 🔐" onPress={() => router.replace("/Auth/logIn")} />
    </View>
  );
}
