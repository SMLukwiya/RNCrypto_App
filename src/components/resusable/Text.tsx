import React, {FC} from 'react';
import { Text } from 'react-native';

// type 
interface IProps {
    variant: string;
    color: string;
    bold: boolean;
}

// index signature
interface IVariant {
    [body: string]: (color: string, bold: boolean) => any
}

const header = (color: string, bold: boolean): {} => ({
    fontSize: 30,
    color, 
    fontWeight: bold ? '600' : '400'
})

const title = (color: string, bold: boolean): {} => ({
    fontSize: 26,
    color, 
    fontWeight: bold ? '600' : '400'
})

const subTitle = (color: string, bold: boolean): {} => ({
    fontSize: 20,
    color, 
    fontWeight: bold ? '600' : '400'
})

const body = (color: string, bold: boolean): {} => ({
    fontSize: 14,
    color,
    fontWeight: bold ? '600' : '400'
})

const caption = (color: string, bold: boolean): {} => ({
    fontSize: 12,
    color,
    fontWeight: bold ? '600' : '400'
})

const variants: IVariant = { header, body, title, caption, subTitle };

const TextComponent: FC<IProps> = (props) => {
    const { children, variant, color, bold } = props;

    return (
        <Text style={variants[variant](color, bold)}>{children}</Text>
    )
}

export default TextComponent;