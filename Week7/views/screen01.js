import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

export default function Screen_01({ navigation }) {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.TextSologan}>ADD YOUR JOB</Text>

      {/* View bao bọc TextInput và Image */}
      <View style={styles.inputContainer}>
        <Image source={require("../assets/Frame.png")} style={styles.icon} />
        <TextInput
          placeholder="Input your job"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.TextInput}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Screen_02", { name: name })}
      >
        <Text style={styles.buttonText}>Finish </Text>
      </TouchableOpacity>
       <Image source={require("../assets/logo.png")} style={styles.Image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  TextSologan: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row", // Đặt ảnh và TextInput cạnh nhau
    alignItems: "center", // Căn giữa theo trục dọc
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    marginTop: 20,
    padding: 5,
    width: 300,
    height: 50,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  TextInput: {
    flex: 1, // Để TextInput chiếm không gian còn lại
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#00BDD6",
    paddingHorizontal: 10,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
  },
});
