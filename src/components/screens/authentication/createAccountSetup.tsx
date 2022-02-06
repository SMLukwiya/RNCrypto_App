import React, {FC, lazy} from 'react';
import { View, ScrollView, useWindowDimensions, StyleSheet, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import Container from '../../resusable/Container';
import { AuthScreenProps } from '../../../routing/auth';

import { IMAGES, COLORS, SIZES, ButtonType, StatusBarStyle } from '../../../configs';

interface IProps {
    navigation: AuthScreenProps<'createAccountSetup'>['navigation'];
    route: AuthScreenProps<'createAccountSetup'>['route'];
}

const Input = lazy(() => import('../../resusable/Input'));
const Image = lazy(() => import('../../resusable/Image'));
const Button = lazy(() => import('../../resusable/Button'));
const Text = lazy(() => import('../../resusable/Text'));

const CreateAccountSetup: FC<IProps> = ({navigation, route}) => {
    const {width} = useWindowDimensions();

    const email = route.params.email

    const { values, handleChange, errors, handleSubmit, handleBlur, touched } = useFormik({
        initialValues: { username: '', password: ''},
        validationSchema: Yup.object({
            username: Yup.string().required('Username address is required'),
            password: Yup.string().required('Password address is required')
        }),
        onSubmit: async values => {
            navigation.navigate('dashboardStack')
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
                    <Text variant='subTitle' color={COLORS.white} bold={true}>Hi, You are almost there!</Text>
                </View>
                <View style={styles.signInTitle}>
                    <Text variant='body' color={COLORS.white} bold={false}>
                        Enter your user name, password to get started!
                    </Text>
                    <Text variant='body' color={COLORS.tetiary} bold={true}>
                        {email}
                    </Text>
                </View>
                <Input
                    value={values.username}
                    onChangeText={handleChange('username')}
                    label={'User name'}
                    placeholder={'e.g, janedoe'}
                    errorMessage={errors.username}
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

export default CreateAccountSetup;