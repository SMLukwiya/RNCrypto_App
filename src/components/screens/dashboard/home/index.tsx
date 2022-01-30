import React, {FC, lazy, useState} from "react";
import { View, Text } from 'react-native';

import Container from '../../../resusable/Container';
import { StatusBarStyle } from '../../../../configs';

const Home: FC = () => {
    return (
        <Container
            barTranslucent={true}
            barStyle={StatusBarStyle.dark}
            barHidden={false}
            bgColor={'transparent'}
        >
            <View style={{justifyContent: 'center'}}>
                <Text>Home</Text>
            </View>
        </Container>
    )
}

export default Home;