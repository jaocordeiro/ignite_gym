import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export default function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={12}
      bg="green.700"
      mt={3}
      rounded="sm"
      _pressed={{
        bg: "green.500",
      }}
      {...rest}
    >
      <Text color="white" fontFamily="body" fontSize="md">
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
