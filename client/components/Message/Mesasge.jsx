import {
  Flex,
  Button,
  VStack,
  HStack,
  Image,
  EditablePreview,
  Editable,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import NextLink from "next/link";

export const Message = ({ content }) => {
  const toast = useToast();
  const { onCopy, hasCopied } = useClipboard(content);

  const handleCopy = () => {
    toast({
      title: "Message Copied!",
      duration: 2000,
      position: "top-right",
      status: "success",
      isClosable: true,
    });
    onCopy();
  };

  return (
    <>
      <HStack justifyContent="center" mt="5em" mb={4}>
        <NextLink href="/">
          <Image src="../logo.png" w={300} />
        </NextLink>
      </HStack>
      <Flex
        direction="column"
        alignItems="center"
        bg="white"
        boxShadow="lg"
        borderRadius={10}
        w={["100%", "100%", "50%", "50%"]}
        m="auto"
        p={10}
      >
        <VStack p={5} justifyContent="space-around">
          <Button onClick={handleCopy}>
            {hasCopied ? "📋 Copied!" : "📋 Copy"}
          </Button>
          <Editable
            textAlign="justify"
            defaultValue={content}
            fontSize="2xl"
            isPreviewFocusable={false}
          >
            <EditablePreview />
          </Editable>
        </VStack>
        <NextLink href="/">🔙 Go back Home</NextLink>
      </Flex>
    </>
  );
};
