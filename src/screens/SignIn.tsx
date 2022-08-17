import { useState } from "react";
import { VStack, Text, Icon, useTheme } from "native-base";
import { Eye, UserCircle } from "phosphor-react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignIn() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { colors } = useTheme();

  return (
    <VStack
      flex={1}
      alignItems="center"
      bg=" #D9D9D9"
      width={110}
      height={49}
      top={204}
      left={144}
    >
      <Text color="#333333" fontWeight={700} fontSize={40.5} lineHeight={49}>
        Login
      </Text>

      <Input
        alignItems="center"
        top={78}
        placeholder="Seu_email@email.com"
        InputRightElement={
          <Icon as={<UserCircle color={colors.gray[300]} />} mr={2} />
        }
        onChangeText={setName} //obtem as informaçoes do input
      />

      <Input
        top={111}
        alignItems="center"
        placeholder="Digite sua senha"
        InputRightElement={
          <Icon as={<Eye color={colors.gray[300]} />} mr={2} />
        }
        secureTextEntry
        onChangeText={setPassword} //obtem as informaçoes do input
      />
      <VStack />
      <VStack 
        flex={3} 
        w={328} 
        h={36} 
        top={144} 
      >
        <Button title="Entrar" />

        <Text
          textAlign="center"
          w={90}
          h={10}
          left={116}
          right={109}
          top={50}
          fontWeight={400}
          fontSize={12}
          lineHeight={13}
          color="#0B30E0"
        >
          Recuperar Senha
        </Text>
      </VStack>
    </VStack>
  );
}
