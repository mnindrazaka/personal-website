import React from "react";
import {
  Box,
  Button,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export type PostCardProps = {
  title: string;
  description: string;
  href: string;
  imageUrl: string;
};

const PostCard = ({ title, description, href, imageUrl }: PostCardProps) => {
  const backgroundColor = useColorModeValue("white", "gray.900");
  return (
    <Link href={href} borderRadius="lg" _hover={{ textDecoration: "none" }}>
      <Box
        backgroundColor={backgroundColor}
        borderWidth="thin"
        borderRadius="lg"
        boxShadow="md"
        width="100%"
        height="100%"
      >
        <Box
          borderTopRadius="lg"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundImage={`url("${imageUrl}")`}
          width="100%"
          height={[200, 400, 200]}
        ></Box>
        <Box textAlign="center" padding="8">
          <Stack spacing="4">
            <Heading size="md">{title}</Heading>
            <Text noOfLines={2}>{description}</Text>
            <Button colorScheme="purple" variant="ghost">
              Read More
            </Button>
          </Stack>
        </Box>
      </Box>
    </Link>
  );
};

export default PostCard;
