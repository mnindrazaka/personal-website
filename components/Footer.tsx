import { Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react-icons";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import SectionContainer from "./SectionContainer";
import SocialMediaButton, { SocialMediaButtonProps } from "./SocialMediaButton";

export const socialMedias: SocialMediaButtonProps[] = [
  {
    href: "mailto:mnindrazaka@gmail.com",
    "aria-label": "gmail",
    icon: <FaEnvelope />,
  },
  {
    href: "https://www.linkedin.com/in/mnindrazaka/",
    "aria-label": "linkedin",
    icon: <FaLinkedin />,
  },
  {
    href: "https://github.com/mnindrazaka",
    "aria-label": "github",
    icon: <FaGithub />,
  },
  {
    href: "https://twitter.com/mnindrazaka",
    "aria-label": "twitter",
    icon: <FaTwitter />,
  },
  {
    href: "https://www.facebook.com/mnindrazaka/",
    "aria-label": "facebook",
    icon: <FaFacebook />,
  },
];

export default function Footer() {
  return (
    <>
      <SectionContainer bg="gray.900" paddingY="16">
        <Stack>
          <Heading size="lg" color="white" textAlign="center">
            That's it
          </Heading>
          <Heading size="md" color="white" textAlign="center" marginBottom="8">
            Want to know more ? Lets have a chat
          </Heading>
          <Stack
            direction="row"
            spacing={{ base: 4, lg: 8 }}
            justifyContent="center"
          >
            {socialMedias.map((socialMedia) => (
              <SocialMediaButton
                {...socialMedia}
                mode="dark"
                key={socialMedia["aria-label"]}
              />
            ))}
          </Stack>
        </Stack>
      </SectionContainer>

      <SectionContainer bg="black" paddingY="8">
        <Text color="white" textAlign="center">
          Copyright &copy; 2021 M. Nindra Zaka
        </Text>
      </SectionContainer>
    </>
  );
}
