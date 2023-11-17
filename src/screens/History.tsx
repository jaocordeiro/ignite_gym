import { useState } from "react";
import { Heading, VStack, SectionList, Text } from "native-base";
import { ScreenHeader } from "@components/ScreenHeader";
import { HistoryCard } from "@components/HistoryCard";

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "26.10.23",
      data: ["Puxada Lateral", "Puxada Frontal"],
    },
    {
      title: "27.10.23",
      data: ["Peito", "Peito Frontal"],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            color="gray.200"
            fontSize="md"
            mt={10}
            mb={3}
            fontFamily="heading"
          >
            {section.title}
          </Heading>
        )}
        px={4}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center" fontSize="md">
            Não há exercícios registrados ainda. {"\n"}
            Bora malhar hoje!
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
