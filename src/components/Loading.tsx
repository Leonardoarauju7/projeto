
import {Center, VStack, Text, Spinner} from 'native-base';


export function Loading(){
    

    return(
        <VStack top={382} left={89} width={196} height={47}>
            <Text fontWeight='bold' color ="#0B30E0" fontSize={40.5}  lineHeight={47}> Pre-Loader</Text>
            

            
            <Center flex={2}>
                <Spinner top={20} color="#0B30E0"></Spinner>
            </Center>

        </VStack>
      

    )
}