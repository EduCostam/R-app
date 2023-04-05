import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import { Logo } from "../../components/logo";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Logo></Logo>

      <Text>Encontre a receita</Text>
      <Text>que combina com você</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F9FF",
    paddingTop: 36,
    paddingStart: 14,
    paddingEnd: 14,
  },
});
