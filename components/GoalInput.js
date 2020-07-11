import React, {useState} from 'react';
import { View,TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = ({inputChange, addGoal}) => {

    let [enterdGoal, setEnteredGoal] = useState('');

    let inputChangeHandler = enteredText => {
        setEnteredGoal(enteredText);
      }
    

    return (
        <View>
            <TextInput 
                placeholder="Goal Title" 
                style={styles.textField}
                onChangeText={inputChangeHandler}
                value={enterdGoal} />

            <Button title="add" onPress={() => addGoal(enterdGoal)} />
        </View>  
    );
};

const styles = StyleSheet.create({
  textField: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginBottom: 10
  }
});

export default GoalInput;