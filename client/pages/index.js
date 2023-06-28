import {
  Heading,
  Box,
  HStack,
  Text,
  Divider,
  Flex,
  Button,
} from "@chakra-ui/react";
import { MessageForm } from "@/components/Message/Form";
import { createMessage } from "@/api/app";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Result } from "@/components/Result/Result";
import { Header } from "@/components/Header/Header";

import Head from "next/head";
import { Author } from "@/components/Author/Author";

export default function Home() {
  const [data, setData] = useState(false);

  const mutation = useMutation({
    mutationKey: ["createMessage"],
    mutationFn: createMessage,
    onSuccess: ({ data }) => {
      setData(data);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = e.target["content"].value;
    mutation.mutate(content);
  };

  return (
    <>
      <Author />

      <Head>
        <title>Hidden Messages</title>
      </Head>

      <Header />

      <Heading
        size="2xl"
        textAlign="center"
        w={["100%", "100%", "60%", "60%"]}
        m="auto"
        color="blackAlpha.800"
      >
        Create Messages and send it to your friends securite & easily.
      </Heading>
      <HStack p={7} justifyContent="center">
        <Text fontSize="xl">🔑 Send SSH Keys</Text>
        <Text fontSize="xl">🔒 Password Accounts</Text>
        <Text fontSize="xl">🔒 Secrects Keys</Text>
      </HStack>
      {data ? (
        <>
          <Box
            borderRadius={5}
            bg="white"
            boxShadow="sm"
            m="auto"
            w={["100%", "100%", "80%", "50%"]}
            p={10}
          >
            <Heading textAlign="center" p={4}>
              Share The Password & Link
            </Heading>
            <Divider mb={4} />
            <Result
              label="URL"
              data={`http://localhost:3000/messages/${data._id}`}
            />
            <Result label="Password" data={data.password} />
            <Button
              mt={10}
              colorScheme="yellow"
              size="lg"
              w="100%"
              onClick={() => {
                setData(false);
              }}
            >
              Create
            </Button>
          </Box>
        </>
      ) : (
        <Flex direction="column" w={["100%", "100%", "90%", "50%"]} m="auto">
          <MessageForm handleSubmit={handleSubmit} />
        </Flex>
      )}
    </>
  );
}
