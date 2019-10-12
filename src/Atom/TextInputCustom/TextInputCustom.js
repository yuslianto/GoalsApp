import React from "react";
import { 
    TextInput,
    StyleSheet
} from "react-native";

const TextInputCustom = (props) => {
    return (
        <TextInput
            {...props}
            style={[styles.input, props.overrideStyle]}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
    },
});

export default TextInputCustom;