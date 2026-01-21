import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../theme";
import { Link, useRouter } from "expo-router";

export default function CounterScreen() {
  const router = useRouter();


   return (
     <View style={styles.container}>
       <Text style={styles.text}>Counter</Text>
     </View>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  }
})