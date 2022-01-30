import React, { Children, FC, Suspense } from "react";
import { StatusBar } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Fallback from './Fallback';
import { StatusBarStyle } from '../../configs';

interface IProps {
    barTranslucent: boolean; 
    barStyle: StatusBarStyle.dark | StatusBarStyle.light;
    barHidden: boolean;
    bgColor: string;
}

const Container: FC<IProps> = (props) => {
    const { children, barTranslucent, barStyle, barHidden, bgColor } = props;

    return (
        <Suspense fallback={<Fallback  />}>
            <StatusBar translucent={barTranslucent} barStyle={barStyle} hidden={barHidden} backgroundColor={bgColor} />
            <SafeAreaView style={{flexGrow: 1}} edges={['bottom']}>
                {children}
            </SafeAreaView>
        </Suspense>
    )
}

export default Container;