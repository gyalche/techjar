"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren, useState } from "react";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";
const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

const Provider = ({ children }: PropsWithChildren) => {
  const [client] = useState(new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
    </QueryClientProvider>
  );
};

export default Provider;
