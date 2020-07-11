//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  let [courseGoals, setCourseGoals] = useState([]);

  let addGoalHandler = (enterdGoal) => {
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
      <GoalInput addGoal={addGoalHandler} />
    
      <FlatList  
        data={courseGoals} 
        renderItem = {itemData => <GoalItem title={itemData.item.value} /> }  />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  }
});
