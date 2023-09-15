import { Input as InputNativeBase, IInputProps } from "native-base";
export function Input({ ...rest }) {
  return (
    <InputNativeBase
      backgroundColor="gray.700"
      h={14}
      px={4}
      borderWidth={0}
      fontSize="sm"
      fontFamily="body"
      color="white"
      mb={4}
      placeholderTextColor="gray.300"
      _focus={{
        bg: "gray.700",
        borderWidth: 1,
        borderColor: "green.500",
      }}
      {...rest}
    />
  );
}
