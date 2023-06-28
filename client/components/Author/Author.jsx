import { Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const Author = () => {
  return (
    <Box
      p={4}
      position="fixed"
      borderRadius={5}
      boxShadow="md"
      bottom={2}
      right={2}
      // bg="twitter.500"
      bg="black"
      color="white"
    >
      <NextLink target="_blank" href="https://www.christianabreu.dev" passHref>
        <Link>
          Made It By <b>Christian Abreu</b>
        </Link>
      </NextLink>
    </Box>
  );
};
