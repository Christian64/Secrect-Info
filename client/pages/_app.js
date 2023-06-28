import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "@fontsource/lato";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient({});
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          color: "black",
          bg: "#FAF0CA",
          fontFamily: "Lato",
        },
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}
