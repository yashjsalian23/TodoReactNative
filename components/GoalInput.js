import React from 'react';
import { View,TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = ({inputChange, addGoal}) => {
    return (
        <View>
            <TextInput 
                placeholder="Goal Title" 
                style={styles.textField}
                onChangeText={inputChange} />

            <Button title="add" onPress={addGoal} />
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