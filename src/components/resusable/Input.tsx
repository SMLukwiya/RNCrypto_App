import React, {FC} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

import { COLORS, SIZES } from '../../configs';

interface Props {
    value: string;
    onChangeText: (value: string) => void;
    label: string;
    placeholder: string;
    errorMessage: string | undefined;
    disabled: boolean;
    secureText: boolean;
}

const InputComponent: FC<Props> = (props) => {
    const { value, onChangeText, label, placeholder, errorMessage, disabled, secureText } = props;

    return (
        <View style={styles.container}>
            <Input
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureText}
                label={label}
                labelStyle={styles.labelStyle}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                autoCompleteType='none'
                autoCapitalize='none'
                placeholder={placeholder}
                errorStyle={{}}
                errorMessage={errorMessage}
                disabledInputStyle={{}}
                containerStyle={styles.containerInput}
                disabled={false}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    containerInput: {
        width: '100%',
        paddingHorizontal: 0
    },
    inputContainerStyle: {
        width: '100%'
    },
    labelStyle: {
        fontSize: SIZES.small * .9,
        color: COLORS.gray
    },
    inputStyle: {
        fontSize: SIZES.small,
        color: COLORS.white,
        margin: 0,
        padding: 0
    }
})

export default InputComponent;