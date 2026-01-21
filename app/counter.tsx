import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../theme";
import { Link, useRouter } from "expo-router";

export default function CounterScreen() {
  const router = useRouter();


   return (
     <View style={styles.container}>
       <TouchableOpacity onPress={() => router.navigate("/idea")}>
         <Text style={{ textAlign: "center", fontSize: 24, marginBottom: 18}}>Go to /idea</Text>
       </TouchableOpacity>
       <Link href={"/idea"}><Text style={{ textAlign: "center"}}>Go to idea version 2</Text></Link>
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