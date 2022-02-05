import React, {FC, lazy} from 'react';
import { View, ScrollView, useWindowDimensions, StyleSheet, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import Container from '../../resusable/Container';
import { AuthScreenProps } from '../../../routing/auth';

import { IMAGES, COLORS, SIZES, ButtonType, StatusBarStyle } from '../../../configs';

interface IProps {
    navigation: AuthScreenProps<'createAccountIndex'>['navigation']
}

const Input = lazy(() => import('../../resusable/Input'));
const Image = lazy(() => import('../../resusable/Image'));
const Button = lazy(() => import('../../resusable/Button'));
const Text = lazy(() => import('../../resusable/Text'));

const CreateAccount: FC<IProps> = ({navigation}) => {
    const {width} = useWindowDimensions();

    const { values, handleChange, errors, handleSubmit, handleBlur, touched } = useFormik({
        initialValues: { email: ''},
        validationSchema: Yup.object({
            email: Yup.string().required('Email address is required')
        }),
        onSubmit: async values => {
            navigation.navigate('createAccountOTP')
        }
    })

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
                    <Text variant='subTitle' color={COLORS.white} bold={true}>Hi, Welcome to Cryptok</Text>
                </View>
                <View style={styles.signInTitle}>
                    <Text variant='body' color={COLORS.white} bold={false}>Let's get you started, enter your email address!</Text>
                </View>
                <Input
                    value={values.email}
                    onChangeText={handleChange('email')}
                    label={'Email Address'}
                    placeholder={'e.g, janedoe@gmail.com'}
                    errorMessage={errors.email}
                    disabled={false}
                    secureText={false}
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
})

export default CreateAccount;