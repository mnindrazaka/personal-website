import React from "react";
import { Flex, Grid, GridItem, Heading } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { Button, IconButton } from "@chakra-ui/button";
import { FaMoon, FaSun } from "react-icons/fa";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import Link from "next/link";

export default function Menubar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const menuBackgroundColor = useColorModeValue("white", "gray.900");
  return (
    <Flex
      boxShadow="md"
      paddingY="4"
      paddingX="8"
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      top="0"
      left="0"
      right="0"
      backgroundColor={menuBackgroundColor}
      zIndex="sticky"
    >
      <Link href="/">
        <a>
          <Heading size="md">M. Nindra Zaka</Heading>
        </a>
      </Link>
      <Grid templateColumns="repeat(2, 1fr)" gap="8" alignItems="center">
        <Link href="/blog">
          <Button variant="ghost">Blog</Button>
        </Link>
        <GridItem>
          <Tooltip
            label={
              colorMode === "dark" ? "Active light mode" : "Active dark mode"
            }
          >
            <IconButton
              icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
              aria-label="colorMode"
              onClick={toggleColorMode}
              borderRadius="full"
            />
          </Tooltip>
        </GridItem>
      </Grid>
    </Flex>
  );
}
