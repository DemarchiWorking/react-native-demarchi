import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';
import { style } from '../../../assets/css/style';

type Props = IButtonProps & {
    title: string;
}

export function Button({ title, ...rest }: Props) {
    return (
        <ButtonNativeBase
        bg={style.cores.azul}
        fontSize="sm"
        rounded="sm"
        _pressed={{bg: "blue.500"}}
            {...rest}
        >
            <Heading color="white" fontSize="sm">
                {title}
            </Heading>
        </ButtonNativeBase>
    );
}