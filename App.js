//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  let [enterdGoal, setEnteredGoal] = useState('');
  let [courseGoals, setCourseGoals] = useState([]);

  let inputChangeHandler = enteredText => {
    setEnteredGoal(enteredText);
  }

  let addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enterdGoal]);
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput 
          placeholder="Goal Title" 
          style={styles.textField}
          onChangeText={inputChangeHandler} />

        <Button title="add" onPress={addGoalHandler} />
      </View>  
      <View>
        {courseGoals.map(item => <Text key={Math.random()}>{item}</Text>)}
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  textField: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginBottom: 10
  }
});
