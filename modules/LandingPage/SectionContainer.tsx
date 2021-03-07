import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

type SectionContainerProps = BoxProps;
const SectionContainer = ({ children, ...boxProps }: SectionContainerProps) => (
  <Box paddingX={[4, 8, 16, 32, 56, 120, 280]} {...boxProps}>
    {children}
  </Box>
);
export default SectionContainer;
