//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';

export default function App() {

  let [enterdGoal, setEnteredGoal] = useState('');
  let [courseGoals, setCourseGoals] = useState([]);

  let inputChangeHandler = enteredText => {
    setEnteredGoal(enteredText);
  }

  let addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {
        key: Math.random().toString(),
        value: enterdGoal
      }
    ]);
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

      <FlatList  
        data={courseGoals} 
        renderItem = {itemData => 
        <View style={styles.listItem} >
          <Text >{item}</Text>
        </View> }  />
        
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
  }, 

  listItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
