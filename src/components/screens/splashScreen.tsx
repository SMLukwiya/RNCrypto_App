import React, {FC, useEffect} from 'react';
import { CommonActions } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Fallback from '../resusable/Fallback';

import { IndexScreenNavigationProp } from '../../routing';

interface Props {
    navigation: IndexScreenNavigationProp,
}

const Splash: FC<Props> = ({navigation}) => {
    
    useEffect(() => {
        SplashScreen.hide();
        navigation.navigate('authStack');
    }, [])

    return (
        <Fallback />
    )
}

export default Splash;