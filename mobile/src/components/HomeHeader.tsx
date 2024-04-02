import { TouchableOpacity } from 'react-native'
import { HStack, VStack, Heading, Text, Icon } from 'native-base'
import { UserPhoto } from './UserPhoto'
import { MaterialIcons } from '@expo/vector-icons'
import { useAuth } from '@hooks/useAuth'
import defaultAvatarPhoto from '@assets/userPhotoDefault.png'

export function HomeHeader() {
  const { user, signOut } = useAuth()

  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={user.avatar ? { uri: user.avatar } : defaultAvatarPhoto}
        size={16}
        alt="Imagem do usuario"
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Ola,
        </Text>

        <Heading color="gray.100" fontSize="md" fontFamily="heading">
          {user.name.toLocaleUpperCase()}
        </Heading>
      </VStack>

      <TouchableOpacity onPress={signOut}>
        <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  )
}
