import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { theme } from "../theme";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <ShoppingListItem name={"Coffee"} isCompleted={false} />
      {/* isCompleted is also same with isCompleted={true} */}
      <ShoppingListItem name="Banana" isCompleted />
      <ShoppingListItem name="Sourdough Bread" isCompleted />
      <StatusBar style="auto" />
      <Link
        href={"/counter"}
        style={{ textAlign: "center", marginBottom: 18, fontSize: 24 }}
      >
        Go to counter
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
});
