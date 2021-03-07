import React from "react";
import { IconButton, IconButtonProps, Link } from "@chakra-ui/react";

export type SocialMediaButtonProps = IconButtonProps & { href: string };
const SocialMediaButton = ({
  href,
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
      _hover={{ color: "black", backgroundColor: "white" }}
      borderColor="white"
      textColor="white"
      variant="outline"
      {...iconButtonProps}
    />
  </Link>
);

export default SocialMediaButton;
