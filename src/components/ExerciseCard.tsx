import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { HStack, Heading, Text, VStack, Image, Icon } from "native-base";
import { Entypo } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  exerciseName: string;
};

export function ExerciseCard({ exerciseName, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="gray.500"
        alignItems="center"
        p={2}
        pr={4}
        rounded="md"
        mb={3}
      >
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk21QutDVm_UsD38S8N3ODNGzIjE1WCLDSeA&usqp=CAU",
          }}
          alt="Imagem do exercício"
          w={16}
          h={16}
          mr={4}
          resizeMode="center"
        />

        <VStack flex={1}>
          <Heading color="white" fontSize="lg">
            {exerciseName}
          </Heading>

          <Text color="gray.200" fontSize="sm" mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  );
}
