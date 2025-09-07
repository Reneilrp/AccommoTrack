import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Fake "database" of users
  const fakeUsers = [
    { username: "alice", password: "1234", role: "user" },
    { username: "bobOwner", password: "1234", role: "owner" },
  ];

  const handleLogin = () => {
    if (!username || !password) {
      alert("❌ Please enter username and password");
      return;
    }

    // Find the user in our fake DB
    const user = fakeUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      alert("❌ Invalid username or password");
      return;
    }

    // ✅ Redirect based on role
    if (user.role === "owner") {
      router.replace("/DormOwner/OwnerDashboard");
    } else {
      router.replace("/User/Dashboard");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 10 }}>
      <Text style={{ fontSize: 24 }}>🔐 Login</Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          width: 200,
          borderRadius: 8,
        }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          width: 200,
          borderRadius: 8,
        }}
      />

      <Button title="Log In" onPress={handleLogin} />
    </View>
  );
}
