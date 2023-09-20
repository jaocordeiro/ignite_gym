import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Input } from "@components/Input";
import Button from "@components/Button";

export function SignIn() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="gray.700" px={5}>
        <Image
          source={BackgroundImg}
          alt="Imagem de fundo do Login"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Acesse sua conta
          </Heading>
        </Center>

        <Input placeholder="E-mail" keyboarType="email" autoCapitalize="none" />

        <Input placeholder="Senha" secureTextEntry />

        <Button title="Acessar" />

        <Center mt={32}>
          <Text color="gray.100" fontSize="sm" mb={1} fontFamily="body">
            Ainda nao tem acesso?
          </Text>
          <Button title="Criar Conta" variant={"outline"} />
        </Center>
      </VStack>
    </ScrollView>
  );
}