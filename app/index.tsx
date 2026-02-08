import {
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  View,
} from "react-native";
import { theme } from "../theme";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { useState } from "react";

type ShoppingListItem = {
  id: string
  name: string
  completedAtTimestamp?: number
};

const initialList: ShoppingListItem[] = [
  { id: "1", name: "Banana"},
  { id: "2", name: "Cream Cheese", completedAtTimestamp: Date.now() },
  { id: "3", name: "Sourdough Bread", completedAtTimestamp: Date.now() },
  { id: "4", name: "Greek Yogurt"},
  { id: "5", name: "Vanilla Extract", completedAtTimestamp: Date.now() },
  { id: "6", name: "Crackers", completedAtTimestamp: Date.now() },
  { id: "7", name: "Rolled Oats", completedAtTimestamp: Date.now() },
  { id: "8", name: "Lettuce"},
  { id: "9", name: "Onions"},
  { id: "10", name: "Scallions", completedAtTimestamp: Date.now() },
  { id : "11", name: "Cookies", completedAtTimestamp: Date.now() },
  { id : "12", name: "Cherries"},
  { id : "13", name: "Mixed Nuts", completedAtTimestamp: Date.now() },
];

export default function Index() {
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>(initialList)

  const [value, setValue] = useState("")

  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        { id: new Date().toISOString(), name: value },
        ...shoppingList,
      ];

      setShoppingList(newShoppingList);
      setValue("");
    }
  }

  const handleDelete = (id: string) => {
    const newShoppingList = shoppingList.filter( (item) => item.id !== id)

    setShoppingList(newShoppingList)
  }

  const handleToggleComplete = (id: string) => {
    const newShoppingList = shoppingList.map( (item) => {
      if (item.id === id) {
        return {
          ...item,
          completedAtTimestamp: item.completedAtTimestamp ? undefined : Date.now(),
        }
      } else {
        return item
      }
    })

    setShoppingList(newShoppingList)
  }

  return (
    <FlatList
      ListHeaderComponent={
        <TextInput
          placeholder="E.g. Bread"
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
          keyboardType="default"
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
        />
      }
      data={shoppingList}
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text style={styles.text}>
            Your shopping list is empty. Please add something you want to buy.
          </Text>
        </View>
      }
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      renderItem={({ item }) => (
        <ShoppingListItem
          name={item.name}
          onDelete={() => handleDelete(item.id)}
          onToggleComplete={() => handleToggleComplete(item.id)}
          isCompleted={Boolean(item.completedAtTimestamp)}
        />
      )}
      stickyHeaderIndices={[0]}
    />
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
  listEmptyContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
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
  text: {
    fontSize: 18,
    textAlign: "center",
  }
});
