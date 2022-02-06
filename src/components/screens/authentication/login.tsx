import React, {FC, lazy, useState} from "react";
import { View, ScrollView, useWindowDimensions, StyleSheet, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import Container from '../../resusable/Container';
import { AuthScreenProps } from '../../../routing/auth';
import { useAppDispatch } from '../../../store';

import { IMAGES, COLORS, SIZES, ButtonType, StatusBarStyle } from '../../../configs';

const Input = lazy(() => import('../../resusable/Input'));
const Image = lazy(() => import('../../resusable/Image'));
const Button = lazy(() => import('../../resusable/Button'));
const Text = lazy(() => import('../../resusable/Text'));

interface IProps {
    // navigation: StackScreenProps<StackType, 'authStack'>
    navigation: AuthScreenProps<'login'>['navigation'],
    route: AuthScreenProps<'login'>['route']
}

const Login: FC<IProps> = ({route, navigation}) => {
    const { height, width } = useWindowDimensions();

    const { values, handleChange, errors, handleSubmit, handleBlur, touched } = useFormik({
        initialValues: { email: '', password: ''},
        validationSchema: Yup.object({
            email: Yup.string().required('Email address is required'),
            password: Yup.string().required('Password is required')
        }),
        onSubmit: async values => {
            navigation.navigate('dashboardStack');
        }
    })

    const forgotPasswordHandler = () => {
        navigation.navigate('login')
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
                    <Text variant='subTitle' color={COLORS.white} bold={true}>Sign in</Text>
                </View>
                <View style={styles.signInTitle}>
                    <Text variant='body' color={COLORS.white} bold={false}>Welcome back to cryptok, please enter your email and password</Text>
                </View>
                <View>
                    <Input
                        value={values.email}
                        onChangeText={handleChange('email')}
                        label={'Email Address'}
                        placeholder={'e.g, janedoe@gmail.com'}
                        errorMessage={errors.email}
                        disabled={false}
                        secureText={false}
                     />
                     <Input
                        value={values.password}
                        onChangeText={handleChange('password')}
                        label={'Password'}
                        placeholder={'e.g, ******'}
                        errorMessage={errors.password}
                        disabled={false}
                        secureText={true}
                     />
                </View>

                <Button
                    title={'Sign in'}
                    gradient={true}
                    disabled={false}
                    type={ButtonType.solid}
                    onPress={handleSubmit}
                    errorMessage={''}
                />
                <TouchableOpacity onPress={() => {}} activeOpacity={.8} style={styles.forgotPassword}>
                    <Text variant='body' color={COLORS.white} bold={false}>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('createAccountIndex')} activeOpacity={.8} style={styles.forgotPassword}>
                    <Text variant='body' color={COLORS.white} bold={false}>Create your account!</Text>
                </TouchableOpacity>
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
    forgotPassword: {
        alignItems: 'center',
        width: '100%',
        marginVertical: SIZES.small
    }
})

export default Login;