//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  let [courseGoals, setCourseGoals] = useState([]);
  // let [showModal, setShowModal] = useState(false);

  let addGoalHandler = (enterdGoal) => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {
        key: Math.random().toString(),
        value: enterdGoal
      }
    ]);
  }

  let onDeleteHandler = goalId => {
    console.log(goalId)
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key!==goalId);
    });
  }

  return (
    <View style={styles.container}>
      {/* <Button title="Add Goal" onPress={() => setShowModal(true)} /> */}

      <GoalInput addGoal={addGoalHandler} />
    
      <FlatList  
        data={courseGoals} 
        renderItem = {itemData => 
          <GoalItem 
          title={itemData.item.value} 
          id={itemData.item.key}
          onDelete={onDeleteHandler} /> }  />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  }
});
