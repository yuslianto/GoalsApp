import React, {useState} from "react";
import { 
    View,
    TextInput,
    Button,
    Modal,
    StyleSheet
} from "react-native";

const GoalInput = props => {

    // initial state
    const [enteredGoal, setEnteredGoal] = useState('');

    // to change text
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    
    // to add goal
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('')
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                {/* <Button title="ADD" onPress={()=>props.onAddGoal(enteredGoal)} /> */}
                <Button title="CANCEL" color="red" onPress={props.onCancel} />
                <Button title="ADD" onPress={addGoalHandler} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
});

export default GoalInput;