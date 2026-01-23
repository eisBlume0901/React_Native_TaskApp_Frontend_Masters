import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, ScrollView } from "react-native";
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
  { id: "4", name: "Greek Yogurt"},
  { id: "5", name: "Vanilla Extract"},
  { id: "6", name: "Crackers" },
  { id: "7", name: "Rolled Oats" },
  { id: "8", name: "Lettuce" },
  { id: "9", name: "Onions" },
  { id: "10", name: "Scallions" },
  { id : "11", name: "Cookies" },
  { id : "12", name: "Cherries" },
  { id : "13", name: "Mixed Nuts" },
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
    // contentContainerStyle - useful when styling CONTENTS inside a Scrollable View
    // such as padding, gap, and alignment
    // style - useful to style the Scrollable View CONTAINER
    // such as size, flex, background
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
    >
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    paddingTop: 12,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50,
    backgroundColor: theme.colorWhite,
  },
});
