import { useState } from "react";
import { HStack, VStack, FlatList, Heading, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";
import { ExerciseCard } from "@components/ExerciseCard";

export function Home() {
  const [groups, setGroups] = useState(["costa", "ombro", "biceps", "coxa"]);
  const [exercices, setExercices] = useState([
    "Puxadas Frontal",
    "Leg Press",
    "Remada",
    "Remada Curva",
    "Supino",
    "Abdominal",
    "Bicicleta",
  ]);
  const [groupSelected, setGroupSelected] = useState("costa");

  const navigation = useNavigation();

  function handleOpenExerciseDetails() {
    navigation.navigate("exercise");
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={
              groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()
            }
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
        minH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercicios
          </Heading>

          <Text color="gray.200" fontSize="sm">
            {exercices.length}
          </Text>
        </HStack>

        <FlatList
          data={exercices}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ExerciseCard
              onPress={handleOpenExerciseDetails}
              exerciseName={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
}
