import {
  Input as InputNativeBase,
  IInputProps,
  FormControl,
} from "native-base";

type Props = IInputProps & {
  erroMessage?: string | null;
};

export function Input({ bg, erroMessage = null, isInvalid, ...rest }: Props) {
  const invalid = !!erroMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <InputNativeBase
        backgroundColor={bg ? bg : "gray.700"}
        h={14}
        px={4}
        borderWidth={0}
        fontSize="sm"
        fontFamily="body"
        color="white"
        placeholderTextColor="gray.300"
        _invalid={{
          borderWidth: 1,
          borderColor: "red.500",
        }}
        _focus={{
          bg: "gray.700",
          borderWidth: 1,
          borderColor: "green.500",
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>{erroMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
}
