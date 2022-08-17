import { Input as NativeBaseInput, IInputProps} from 'native-base';

export function Input({...rest}:  IInputProps ) {
  return (
    <NativeBaseInput
        w={328}
        h={36}
        
        
        bg="#FFFFFF"
        
        borderRadius={4}
        fontSize={12}
        fontFamily="Inter"
        color="black"
        placeholderTextColor="gray.300"
        _focus={{
            borderWidth: 1,
            borderColor:"#79BCFA",
            bg: "#FFFFF"
        }}
        {...rest }
    />
  )
}