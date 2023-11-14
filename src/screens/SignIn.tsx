import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import { useForm, Controller } from "react-hook-form";
import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Input } from "@components/Input";
import Button from "@components/Button";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>();

  function handleNewAccount() {
    navigation.navigate("SignUp");
  }

  function handleSignUp(data: FormDataProps) {
    console.log("LOG:(SignIn) - data", data);
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={5}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
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

        <Controller
          control={control}
          name="name"
          rules={{ required: "informe o nome!" }}
          render={({ field: { onChange, value } }) => (
            <Input placeholder="Nome" onChangeText={onChange} value={value} />
          )}
        />
        <Text color="red.400">{errors.name?.message}</Text>

        <Controller
          control={control}
          name="email"
          rules={{ required: "informe o E-mail!" }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="E-mail"
              keyboarType="email"
              autoCapitalize="none"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{ required: "informe a senha!" }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Senha"
              secureTextEntry
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Controller
          control={control}
          name="confirmPassword"
          rules={{ required: "Confirme a senha!" }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Confirmar Senha"
              secureTextEntry
              onChangeText={onChange}
              value={value}
              onSubmitEditing={handleSubmit(handleSignUp)}
              returnKeyType="send"
            />
          )}
        />

        <Button title="Criar e Acessar" onPress={handleSubmit(handleSignUp)} />

        <Center mt={32}>
          <Text color="gray.100" fontSize="sm" mb={1} fontFamily="body">
            Ainda nao tem acesso?
          </Text>
          <Button
            title="Criar Conta"
            variant={"outline"}
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
