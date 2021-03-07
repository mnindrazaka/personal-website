import React from "react";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

export type SkillCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const SkillCard = ({ title, description, icon }: SkillCardProps) => (
  <Flex
    backgroundColor="white"
    borderWidth="thin"
    borderRadius="lg"
    padding="8"
    width="100%"
    height="100%"
    flexDirection="column"
    alignItems="center"
    textAlign="center"
    boxShadow="md"
  >
    <Box
      display="inline-block"
      padding="4"
      marginBottom={4}
      borderWidth="thin"
      borderRadius="full"
    >
      {icon}
    </Box>
    <Stack spacing="4" marginBottom="4">
      <Heading size="md">{title}</Heading>
      <Text>{description}</Text>
    </Stack>
  </Flex>
);

export default SkillCard;
