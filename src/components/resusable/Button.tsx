import React, {FC} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import { COLORS, SIZES, ButtonType } from '../../configs';
import Text from '../resusable/Text';

interface Props {
    title: string;
    errorMessage: string;
    gradient: boolean;
    disabled: boolean;
    type: ButtonType.solid | ButtonType.clear | ButtonType.outline;
    onPress: () => void
}

const ButtonComponent: FC<Props> = (props) => {
    const { title, type, gradient, disabled, onPress, errorMessage } = props;

    return (
        <View style={styles.container}>
            <Button
                TouchableComponent={TouchableOpacity}
                ViewComponent={gradient ? LinearGradient : View}
                activeOpacity={.8}
                onPress={onPress}
                buttonStyle={styles.buttonStyle}
                containerStyle={styles.containerStyle}
                disabled={disabled}
                disabledStyle={{}}
                disabledTitleStyle={{}}
                linearGradientProps={gradient ? {
                    colors: [COLORS.purple, COLORS.tetiary, COLORS.tetiary, COLORS.purple], start: {x: 1, y: 0}, end: {x: 0, y: 1}
                } : {}}
                title={title}
                titleStyle={styles.titleStyle}
                type={type}
            />
            <View style={styles.errorContainer}>
                {!!errorMessage && <Text variant='caption' color={COLORS.danger} bold={false}>{errorMessage}</Text>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    containerStyle: {
        width:'100%',
        borderRadius: SIZES.medium,
        overflow: 'hidden'
    },
    buttonStyle: {},
    titleStyle: {
        color: COLORS.white,
        fontSize: SIZES.small
    },
    errorContainer: {
        width: '100%',
        alignItems: 'center'
    }
});

export default ButtonComponent;