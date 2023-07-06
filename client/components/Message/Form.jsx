import { Textarea, Button } from "@chakra-ui/react";

export const MessageForm = ({ handleSubmit }) => {
  return (
    <>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <Textarea
          size="lg"
          bg="white"
          name="content"
          boxShadow="md"
          border="none"
          rows={15}
          p={4}
          placeholder="This is my secrect message ....."
          required
        ></Textarea>
        <Button
          display="block"
          w={["100%", "100%", "60%", "60%"]}
          m="auto"
          mt={5}
          type="submit"
          size="lg"
          colorScheme="yellow"
        >
          Create
        </Button>
      </form>
    </>
  );
};
