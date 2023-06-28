import { useClipboard, useToast } from "@chakra-ui/react";
export const useCopy = (state) => {
  // const toast = useToast();
  const { onCopy } = useClipboard(state);
  const callback = () => {
    // toast({
    //   title,
    //   duration: 2000,
    //   position: "top-right",
    //   status: type,
    //   isClosable: true,
    // });
    onCopy();
  };

  return callback;
};
