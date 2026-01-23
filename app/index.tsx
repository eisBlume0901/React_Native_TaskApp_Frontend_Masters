import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput } from "react-native";
import { theme } from "../theme";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { useState } from "react";

type ShoppingListItem = {
  id: string;
  name: string;
};

const initialList: ShoppingListItem[] = [
  { id: "1", name: "Banana" },
  { id: "2", name: "Cream Cheese" },
  { id: "3", name: "Sourdough Bread" },
];

export default function Index() {
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>(initialList);
  const [value, setValue] = useState("");
  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        { id: new Date().toISOString(), name: value },
        ...shoppingList,
      ];

      setShoppingList(newShoppingList);
      setValue("");
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="E.g. Bread"
        style={styles.textInput}
        value={value}
        onChangeText={setValue}
        keyboardType="default"
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />

      {shoppingList.map((item) => (
        <ShoppingListItem name={item.name} key={item.id} />
      ))}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    paddingTop: 12,
  },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50,
  },
});
