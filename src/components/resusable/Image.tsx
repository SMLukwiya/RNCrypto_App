import React, {FC} from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Image, ImageProps } from 'react-native-elements';

interface IProps {
    image: ImageProps['source'];
    style: {};
}

const ImageComponent: FC<IProps> = (props) => {
    const { image, style } = props;

    return (
        <View style={style}>
            <Image
                source={image}
                containerStyle={styles.imageStyle}
                resizeMode='cover'
                PlaceholderContent={<ActivityIndicator size='small' color={'blue'} />}
                placeholderStyle={{}}
                onPress={() => {}}
                transition={true}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: '100%',
        width: '100%'
    }
})

export default ImageComponent;