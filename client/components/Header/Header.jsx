import { HStack, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const Header = () => {
  return (
    <>
      <HStack
        p={[2, 2, 10, 10]}
        alignItems="center"
        justifyContent="space-between"
      >
        <NextLink href="/">
          <Image src="../logo.png" w={300} />
        </NextLink>
        <HStack hideBelow="md" spacing={10} mr={10}>
          <NextLink
            href="https://www.github.com/Christian64/Secrect-Info"
            passHref
          >
            <Link fontSize="lg">🐙 Github</Link>
          </NextLink>
          <NextLink href="https://www.christianabreu.dev" passHref>
            <Link fontSize="lg">🚀 More Projects</Link>
          </NextLink>
          <NextLink href="https://www.christianabreu.dev" passHref>
            <Link fontSize="lg">📤 Contact Me!</Link>
          </NextLink>
        </HStack>
      </HStack>
    </>
  );
};
