import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = ({title, onDelete, id}) => {
    return (
        <TouchableOpacity onPress={()=>onDelete(id)}>
            <View style={styles.listItem} >
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
})

export default GoalItem;