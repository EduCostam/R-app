import { View, Text, StyleSheet } from "react-native";

export function Favorites() {
  return (
    <View style={styles.container}>
      <Text>Página De favoritos!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
  },
});
