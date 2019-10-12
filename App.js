import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';

import GoalItem from './src/Molekul/GoalItem'
import GoalInput from './src/Molekul/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  
  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  const openModal = () => {
    setIsAddMode(true);
  }

  return (

    
    <View style={styles.screen}>
      <Button
        title="Add New Goal"
        onPress={openModal}
      />
      <GoalInput 
        onAddGoal={addGoalHandler}
        visible={isAddMode}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index)=> item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem 
            id={itemData.item.id} 
            onDelete={removeGoalHandler} 
            title={itemData.item.value} 
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
