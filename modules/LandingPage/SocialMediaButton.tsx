import React from "react";
import { IconButton, IconButtonProps, Link } from "@chakra-ui/react";

export type SocialMediaButtonProps = IconButtonProps & {
  href: string;
  mode?: "dark" | "light";
};

const SocialMediaButton = ({
  href,
  mode,
  ...iconButtonProps
}: SocialMediaButtonProps) => (
  <Link
    href={href}
    _hover={{ textDecoration: "none" }}
    borderRadius="full"
    tabIndex={-1}
  >
    <IconButton
      borderRadius="full"
      _hover={{
        color: mode === "dark" ? "gray.800" : "white",
        backgroundColor: mode === "dark" ? "white" : "gray.800",
      }}
      borderColor={mode === "dark" ? "white" : "gray.800"}
      textColor={mode === "dark" ? "white" : "gray.800"}
      variant="outline"
      {...iconButtonProps}
    />
  </Link>
);

export default SocialMediaButton;
