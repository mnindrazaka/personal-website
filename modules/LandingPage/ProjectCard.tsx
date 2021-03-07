import React from "react";
import { Box, Divider, Heading, Link, Text } from "@chakra-ui/react";

export type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
};
const ProjectCard = ({ title, description, href }: ProjectCardProps) => (
  <Link href={href} _hover={{ textDecoration: "none" }} borderRadius="lg">
    <Box
      borderWidth="thin"
      borderRadius="lg"
      padding="8"
      width="100%"
      height="100%"
      boxShadow="md"
    >
      <Heading size="md" textAlign="center">
        {title}
      </Heading>
      <Divider marginY="4" />
      <Text textAlign="center">{description}</Text>
    </Box>
  </Link>
);

export default ProjectCard;
