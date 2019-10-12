import React from "react";
import { 
    View,
    Button,
    StyleSheet
} from "react-native";

const ButtonCustom = (props) => {
    return (
        <View style={styles.button}>
            {/* <Button title={title} color={color} onPress={props.onPress} /> */}
            <Button
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '40%'
    }
});

export default ButtonCustom;