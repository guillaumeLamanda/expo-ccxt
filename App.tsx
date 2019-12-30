import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ListView, FlatList } from "react-native";
import ccxt from "ccxt";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Minimal reproduction of ccxt issue on expo!</Text>
      {/* <FlatList data={ccxt.exchanges} renderItem={e => <Text>{e}</Text>} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
