import React, {useState} from "react";
import { 
    View,
    TextInput,
    Button,
    Modal,
    StyleSheet
} from "react-native";

import ButtonCustom from "../Atom/ButtonCustom/ButtonCustom";
import TextInputCustom from "../Atom/TextInputCustom/TextInputCustom";

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
                <TextInputCustom
                    placeholder="Course Goal"
                    placeholderTextColor="#cecece"
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    {/* <Button title="ADD" onPress={()=>props.onAddGoal(enteredGoal)} /> */}
                    <ButtonCustom
                        title="CANCEL"
                        color="red"
                        onPress={props.onCancel}
                    />
                    <ButtonCustom
                        title="ADD"
                        color=""
                        onPress={addGoalHandler}
                    />
                </View>
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
        marginTop: 5
    },
});

export default GoalInput;