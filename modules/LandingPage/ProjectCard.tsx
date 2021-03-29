import React from "react";
import { Divider, Flex, Heading, Link, Text } from "@chakra-ui/react";
import LinkButton from "./LinkButton";

export type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
};
const ProjectCard = ({ title, description, href }: ProjectCardProps) => (
  <Link href={href} _hover={{ textDecoration: "none" }} borderRadius="lg">
    <Flex
      borderWidth="thin"
      borderRadius="lg"
      padding="8"
      width="100%"
      height="100%"
      boxShadow="md"
      backgroundColor="white"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading size="md" textAlign="center">
        {title}
      </Heading>
      <Divider marginY="4" />
      <Text textAlign="center">{description}</Text>
      <Divider marginY="4" />
      <LinkButton href={href} colorScheme="purple">
        See Project
      </LinkButton>
    </Flex>
  </Link>
);

export default ProjectCard;
