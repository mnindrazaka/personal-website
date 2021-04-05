import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, Grid, Heading, Link, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import LinkButton from "../../components/LinkButton";

export type ProjectCardHorizontalProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
};

const ProjectCardHorizontal = ({
  title,
  description,
  icon,
  href,
}: ProjectCardHorizontalProps) => {
  const backgroundColor = useColorModeValue("white", "gray.900");
  return (
    <Link href={href} _hover={{ textDecoration: "none" }} borderRadius="lg">
      <Box
        borderWidth="thin"
        borderRadius="lg"
        padding="8"
        width="100%"
        height="100%"
        boxShadow="md"
        backgroundColor={backgroundColor}
      >
        <Grid
          alignItems="center"
          templateColumns={{ base: "1fr", lg: "1fr 8fr" }}
          gap="8"
          justifyItems="center"
        >
          <Flex
            borderWidth="thin"
            justifyContent="center"
            alignItems="center"
            padding="4"
            borderRadius="full"
          >
            {icon}
          </Flex>
          <Stack spacing="4">
            <Heading size="md">{title}</Heading>
            <Text fontSize="sm">{description}</Text>
            <LinkButton href={href} colorScheme="purple">
              See Project
            </LinkButton>
          </Stack>
        </Grid>
      </Box>
    </Link>
  );
};

export default ProjectCardHorizontal;
