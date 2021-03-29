import { Box, Flex, Grid, Heading, Link, Stack, Text } from "@chakra-ui/layout";
import React from "react";

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
  return (
    <Link href={href} _hover={{ textDecoration: "none" }} borderRadius="lg">
      <Box
        borderWidth="thin"
        borderRadius="lg"
        padding="8"
        width="100%"
        height="100%"
        boxShadow="md"
        backgroundColor="white"
      >
        <Grid alignItems="center" templateColumns="1fr 8fr" columnGap="8">
          <Flex
            borderWidth="thin"
            justifyContent="center"
            alignItems="center"
            padding="4"
            borderRadius="full"
          >
            {icon}
          </Flex>
          <Stack>
            <Heading size="md">{title}</Heading>
            <Text fontSize="sm">{description}</Text>
          </Stack>
        </Grid>
      </Box>
    </Link>
  );
};

export default ProjectCardHorizontal;
