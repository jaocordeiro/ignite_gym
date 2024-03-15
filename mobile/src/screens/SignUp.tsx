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
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { api } from '@services/api'
import { Input } from '@components/Input'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import axios from 'axios'
import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import Button from '@components/Button'
import { Alert } from 'react-native'
import { AppError } from '@utils/AppError'

type FormDataProps = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
  password: yup
    .string()
    .required('Informe uma senha')
    .min(6, 'A senha deve conter pelo menos 6 caracteres.'),
  confirmPassword: yup
    .string()
    .required('Confirmação a senha')
    .oneOf(
      [yup.ref('password'), null],
      'A confirmação de senha não confere com a senha.',
    ),
})

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()
  const toast = useToast()

  function handleGoBack() {
    navigation.navigate('SignIn')
  }
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  })

  function handleNewAccount() {
    navigation.navigate('SignUp')
  }

  async function handleSignUp({ name, password, email }: FormDataProps) {
    console.log('LOG:(SignUp) - name, password, email', name, password, email)
    try {
      const response = await api.post('/users', { name, password, email })
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Nao foi possivel criar a conta, tente novamente mais tarde.'
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
          name="name"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Nome"
              onChangeText={onChange}
              value={value}
              erroMessage={errors.name?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
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

        <Controller
          control={control}
          name="confirmPassword"
          rules={{ required: 'Confirme a senha!' }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Confirmar Senha"
              secureTextEntry
              onChangeText={onChange}
              value={value}
              onSubmitEditing={handleSubmit(handleSignUp)}
              returnKeyType="send"
              erroMessage={errors.confirmPassword?.message}
            />
          )}
        />

        <Button title="Criar e Acessar" onPress={handleSubmit(handleSignUp)} />

        <Button
          title="Voltar para o login"
          variant={'outline'}
          mt={32}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  )
}
