import {Button as ButtonNativeBase, IButtonProps, Text} from 'native-base';

type Props = IButtonProps & {
    title: string;
}
export function Button({title, ...rest}: Props) {
  return (
    <ButtonNativeBase
      bg="#0B30E0"
      fontSize="sm"
      rounded="sm"
      _pressed={{bg:"#0B30E0"}}
    
      {...rest}
    >
      
      <Text 
        
        color="#FFFFFF" 
        fontStyle="normal" 
        fontSize={16} 
        lineHeight={19.36} 
        fontWeight={600} 
        right={1}
        left={0}
        
        >{title}
      </Text>

    </ButtonNativeBase>
  );
}