import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useRouter } from "expo-router";

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // TODO: Replace with real auth logic
    if (name && email && password) {
      alert("✅ Account created!");
      router.replace("/Auth/logIn"); // after signup, go back to login
    } else {
      alert("❌ Please fill all fields");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>📝 Sign Up</Text>

      <TextInput
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 8 }}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 8 }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 8 }}
      />

      <Button title="Sign Up" onPress={handleSignUp} />

      <Text style={{ marginTop: 20, textAlign: "center" }}>
        Already have an account?
      </Text>
      <Button title="Go to Login" onPress={() => router.push("//logIn")} />
    </View>
  );
}
