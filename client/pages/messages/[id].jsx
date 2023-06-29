import {
  Input,
  Box,
  VStack,
  Image,
  Flex,
  Heading,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { getMessage } from "@/api/app";
import { Message } from "@/components/Message/Mesasge";
import NextLink from "next/link";

export default function GetMessage() {
  const toast = useToast();

  const router = useRouter();
  const { id } = router.query;

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target["password"].value;
    mutation.mutate({ id, password });
  };

  const mutation = useMutation({
    mutationKey: ["message", id],
    mutationFn: getMessage,
    onError: () => {
      toast({
        title: "Incorrect Password",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    },
  });

  if (mutation.data) {
    const { content } = mutation.data.data;
    return <Message content={content} />;
  }

  return (
    <VStack>
      <Flex
        direction="column"
        alignItems="center"
        w={["100%", "100%", "30%", "20%"]}
        m="auto"
        mt="3em"
      >
        <Image src="../logo.png" my={5} />
        <Box p={10} bg="white" boxShadow="lg" borderRadius={10}>
          <Heading textAlign="center" size="md">
            🔒 Encrypted Message
          </Heading>
          <Text textAlign="center" mt={1}>
            Messages are protected & encrypted you need to insert the right
            password to get access
          </Text>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Input
              textAlign="center"
              type="password"
              name="password"
              my={1}
              placeholder="Password"
            />
            <Button colorScheme="twitter" w="100%" type="submit">
              Enter
            </Button>
          </form>
        </Box>
        <NextLink href="/" passHref style={{ width: "100%" }}>
          <Button mt={4} colorScheme="yellow" w="100%">
            🏠 Back Home
          </Button>
        </NextLink>
      </Flex>
    </VStack>
  );
}
