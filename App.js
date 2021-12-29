import React from "react";
import { StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CarsList from "./components/CarsList";
import Header from "./components/Header";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar color="dark" />
      <Header />
      <CarsList />
    </SafeAreaView>
  );
}
