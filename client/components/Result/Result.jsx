import {
  Box,
  Text,
  HStack,
  Button,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import { Editable, EditablePreview } from "@chakra-ui/react";

export const Result = ({ label, data }) => {
  const { onCopy, hasCopied } = useClipboard(data);
  const toast = useToast();

  const copyValue = () => {
    onCopy();
    toast({
      title: `${label.toUpperCase()} Copied!`,
      description: "Now share the url with your pear",
      status: "success",
      duration: 2000,
      position: "top-right",
      isClosable: true,
    });
  };

  return (
    <>
      <Box>
        <Text size="xl">{label}</Text>
      </Box>
      <HStack w="100%" justifyContent="space-between">
        <Editable
          textAlign="center"
          defaultValue={data}
          fontSize="2xl"
          isPreviewFocusable={false}
        >
          <EditablePreview />
        </Editable>
        <Button onClick={copyValue}>{hasCopied ? "Copied!" : "📋"}</Button>
      </HStack>
    </>
  );
};
