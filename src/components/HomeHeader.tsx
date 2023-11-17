import { TouchableOpacity } from "react-native";
import { HStack, VStack, Heading, Text, Icon } from "native-base";
import { UserPhoto } from "./UserPhoto";
import { MaterialIcons } from "@expo/vector-icons";

export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={{ uri: "https://github.com/jaocordeiro.png" }}
        size={16}
        alt="Imagem do usuario"
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Ola,
        </Text>

        <Heading color="gray.100" fontSize="md" fontFamily="heading">
          Joao Vitor
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  );
}
