import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  VStack,
  Image,
  Text,
  Center,
  Heading,
  ScrollView,
  useToast,
} from 'native-base'
import { useForm, Controller } from 'react-hook-form'
import { useAuth } from '@hooks/useAuth'
import { AppError } from '@utils/AppError'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import { Input } from '@components/Input'
import Button from '@components/Button'
import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'

type FormDataProps = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const { signIn } = useAuth()
  const navigation = useNavigation<AuthNavigatorRoutesProps>()
  const toast = useToast()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>()

  function handleNewAccount() {
    navigation.navigate('SignUp')
  }

  async function handleSignIn({ email, password }: FormDataProps) {
    try {
      setIsLoading(true)
      await signIn(email, password)
    } catch (error) {
      const isAppError = error instanceof AppError

      const title = isAppError
        ? error.message
        : 'Não foi possível acessar. Tente novamente mais tarde!'
      setIsLoading(false)

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    }
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
          name="email"
          rules={{ required: 'informe o E-mail!' }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="E-mail"
              keyboarType="email"
              autoCapitalize="none"
              onChangeText={onChange}
              value={value}
              erroMessage={errors.email?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{ required: 'informe a senha!' }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Senha"
              secureTextEntry
              onChangeText={onChange}
              value={value}
              erroMessage={errors.password?.message}
            />
          )}
        />

        <Button
          title="Acessar"
          onPress={handleSubmit(handleSignIn)}
          isLoading={isLoading}
        />

        <Center mt={32}>
          <Text color="gray.100" fontSize="sm" mb={1} fontFamily="body">
            Ainda nao tem acesso?
          </Text>
          <Button
            title="Criar Conta"
            variant={'outline'}
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}
