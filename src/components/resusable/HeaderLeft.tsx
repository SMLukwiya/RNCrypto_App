import React, {FC} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS, SIZES } from '../../configs';

interface IHeaderLeft {
    color: string;
    onPress:  () => void;
}

const HeaderLeft: FC<IHeaderLeft> = ({color, onPress}) => (
    <View style={styles.container}>
        <Ionicons name='arrow-back-outline' size={25} color={color} style={styles.iconStyle} onPress={onPress} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: 20,
        overflow: 'hidden',
        padding: SIZES.small * .25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconStyle: {
        // backgroundColor: COLORS.white,
        // borderRadius: 15,
        // overflow: 'hidden',
        // padding: SIZES.large
    }
})

export default HeaderLeft;