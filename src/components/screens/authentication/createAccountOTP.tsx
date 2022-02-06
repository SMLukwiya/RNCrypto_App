import React, {FC, lazy, useEffect, useState, useRef} from 'react';
import { View, ScrollView, useWindowDimensions, StyleSheet, TouchableOpacity } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import Container from '../../resusable/Container';
import { AuthScreenProps } from '../../../routing/auth';
import { IMAGES, COLORS, SIZES, ButtonType, StatusBarStyle, formatTime } from '../../../configs';

interface IProp {
    navigation: AuthScreenProps<'createAccountOTP'>['navigation'];
    route: AuthScreenProps<'createAccountOTP'>['route'];
}

const Image = lazy(() => import('../../resusable/Image'));
const Button = lazy(() => import('../../resusable/Button'));
const Text = lazy(() => import('../../resusable/Text'));

const CreateAccountOTP: FC<IProp> = ({navigation, route}) => {
    const {width} = useWindowDimensions();

    const [theCode, setTheCode] = useState('');
    const [timer, setTimer] = useState(90000); // 90 seconds(millis)
    const [enable, setEnable] = useState(false)
    const interval = useRef<any>(null);

    const minutes = Math.floor(timer/1000/60) % 60, secs = Math.floor(timer/1000) % 60;

    const onChangeHandler = (code: string) => {
        setTheCode(code)
        console.log(code);
    }

    const handleSubmit = () => {
        navigation.navigate('createAccountSetup', {email: route.params.email})
    }

    const adjustTimerHandler = () => {
        setTimer((timer) => {
            if (timer === 0) {
                setEnable(true);
                return timer;
            }
            const timeLeft = timer - 1000;
            return timeLeft;
        }) 
    }

    useEffect(() => {
        interval.current = setInterval(adjustTimerHandler, 1000)

        return () => clearInterval(interval.current);
    }, [])

    const resendCodeHandler = () => {
        setTimer(90000)
    }

    return (
        <Container
            barTranslucent={true}
            barStyle={StatusBarStyle.light}
            barHidden={false}
            bgColor={'transparent'}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={{height: width * .1, width: width * .1, marginRight: 10}} image={IMAGES.Logo} />
                    <Text variant='title' color={COLORS.white} bold={true}>Crypto</Text>
                </View>
                <View style={styles.signInTitle}>
                    <Text variant='subTitle' color={COLORS.white} bold={true}>Verification</Text>
                </View>
                <View style={styles.signInTitle}>
                    <Text variant='body' color={COLORS.white} bold={false}>Enter the six digit code that has been sent to your email.</Text>
                </View>

                <OTPInputView 
                    pinCount={6}
                    onCodeChanged={onChangeHandler}
                    onCodeFilled={code => console.log(code)}
                    code={theCode}
                    style={styles.otpInputView}
                    codeInputFieldStyle={styles.codeInputFieldStyle}
                    codeInputHighlightStyle={styles.codeInputHighlightStyle}
                    autoFocusOnLoad={false}
                    secureTextEntry={true}
                    keyboardType='number-pad'
                />

                <View style={styles.resendCodeContainer}>
                    <Text variant='body' color={COLORS.white} bold={false}>I didn't receive a code.</Text>
                    <TouchableOpacity activeOpacity={.8} onPress={enable ? resendCodeHandler : () => {}}>
                        <Text variant='body' color={COLORS.tetiary} bold={true}>Resend Code</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.timeLeftContainer}>
                    <Text variant='body' color={COLORS.tetiary} bold={true}>{minutes}:{formatTime(secs)} sec left</Text>
                </View>

                <Button
                    title={'Continue'}
                    gradient={true}
                    disabled={false}
                    type={ButtonType.solid}
                    onPress={handleSubmit}
                    errorMessage={''}
                />
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: COLORS.primary,
        paddingHorizontal: SIZES.xlarge
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: SIZES.small
    },
    signInTitle: {
        marginBottom: SIZES.small
    },
    otpInputView: {
        height: SIZES.xlarge * 3,
        padding: 0,
        marginBottom: SIZES.small,
        width: '100%'
    },
    codeInputFieldStyle: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1
    },
    codeInputHighlightStyle: {
        borderColor: 'red'
    },
    resendCodeContainer: {
        width: '100%',
        marginBottom: SIZES.small,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeLeftContainer: {
        width: '100%',
        marginBottom: SIZES.small,
        alignItems: 'center'
    }
})

export default CreateAccountOTP;