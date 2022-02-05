import React, {FC, lazy, useState} from 'react';
import { View, ScrollView, useWindowDimensions, StyleSheet, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import Container from '../../resusable/Container';
import { IMAGES, COLORS, SIZES, ButtonType, StatusBarStyle } from '../../../configs';

interface IProp {

}

const Input = lazy(() => import('../../resusable/Input'));
const Image = lazy(() => import('../../resusable/Image'));
const Button = lazy(() => import('../../resusable/Button'));
const Text = lazy(() => import('../../resusable/Text'));

const CreateAccountOTP: FC<IProp> = (props) => {
    const {width} = useWindowDimensions();

    const [theCode, setTheCode] = useState('');

    const { values, handleChange, errors, handleSubmit, handleBlur, touched } = useFormik({
        initialValues: { email: ''},
        validationSchema: Yup.object({
            email: Yup.string().required('Email address is required')
        }),
        onSubmit: async values => {
            
        }
    })

    const onChnangeHandler = (code: string) => {
        setTheCode(code)
        console.log(code);
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
                    onCodeChanged={onChnangeHandler}
                    onCodeFilled={code => console.log(code)}
                    code={theCode}
                    style={styles.otpInputView}
                    codeInputFieldStyle={styles.codeInputFieldStyle}
                    codeInputHighlightStyle={styles.codeInputHighlightStyle}
                    autoFocusOnLoad={false}
                    secureTextEntry={true}
                    keyboardType='number-pad'
                />

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
    }
})

export default CreateAccountOTP;