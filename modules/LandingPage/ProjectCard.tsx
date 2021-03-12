import React from "react";
import {
  Box,
  Divider,
  Heading,
  Link,
  Tag,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  tools: string[];
};
const ProjectCard = ({ title, description, href, tools }: ProjectCardProps) => (
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
      <Heading size="md" textAlign="center">
        {title}
      </Heading>
      <Divider marginY="4" />
      <Text textAlign="center">{description}</Text>
      <Divider marginY="4" />
      <Wrap justify="center">
        {tools.map((tool) => (
          <WrapItem key={tool}>
            <Tag size="sm" colorScheme="purple" variant="outline">
              {tool}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  </Link>
);

export default ProjectCard;
