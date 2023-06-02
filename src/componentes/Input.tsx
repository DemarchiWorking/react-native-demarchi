import { Input as NativeBaseInput, IInputProps } from 'native-base';
import { style } from '../../assets/css/style';

type Props = IInputProps;

export function Input({ ...rest }: Props) {


    return (
        <>
                <NativeBaseInput
            bg="white"
            size="md"
            borderWidth={3}
            fontSize="md"
            fontFamily="body"
            color="white"
            width="80%"
            placeholderTextColor="gray.300"
            {...rest}
            _focus={{
                borderWidth: 2,
                borderColor: style.cores.azul,
                backgroundColor: "gray.200",
            }}
        />
    </>
    );
}

/*
                <NativeBaseInput
            bg="gray.700"
            size="md"
            borderWidth={0}
            fontSize="md"
            fontFamily="body"
            color="white"
            width="80%"
            placeholderTextColor="gray.300"
            _focus={{
                borderWidth: 1,
                borderColor: "green.500",
                backgroundColor: "gray.700",
            }}
        />
    </>
    );
}
*/