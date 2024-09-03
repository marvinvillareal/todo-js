import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/context/stores/TodoStore';
import TodoApp from './app/screens/TodoApp';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <Provider store={store}>
      <TodoApp />
    </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
