import { View, Text, StyleSheet } from "react-native";

export function Logo() {
  return (
    <View style={styles.logoArea}>
      <Text>Receita Fácil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoArea: {
    backgroundColor: "#4CBE6C",
  },
});
