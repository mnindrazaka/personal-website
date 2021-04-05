import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Code, Heading, Link, Text } from "@chakra-ui/layout";
import { Alert } from "@chakra-ui/alert";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Table, Tbody, Td, Thead, Tr } from "@chakra-ui/table";

type MarkdownViewProps = {
  content: string;
};

const MarkdownView = ({ content }: MarkdownViewProps) => {
  const linkColor = useColorModeValue("purple.600", "purple.300");
  return (
    <ReactMarkdown
      allowDangerousHtml
      plugins={[gfm]}
      renderers={{
        paragraph: ({ children }) => {
          return <Text>{children}</Text>;
        },
        heading: ({ level, children }) => {
          return (
            <Heading
              size={
                level === 6
                  ? "xs"
                  : level === 5
                  ? "sm"
                  : level === 4
                  ? "md"
                  : level === 3
                  ? "lg"
                  : level === 2
                  ? "xl"
                  : "2xl"
              }
            >
              {children}
            </Heading>
          );
        },
        code: ({ language, value }) => {
          return (
            <div className="my-4" role="code">
              <SyntaxHighlighter
                style={materialDark}
                language={language}
                children={value}
              />
            </div>
          );
        },
        blockquote: ({ children }) => {
          return <Alert colorScheme="purple">{children}</Alert>;
        },
        link: ({ children, href }) => (
          <Link href={href} target="_blank" color={linkColor}>
            {children}
          </Link>
        ),
        inlineCode: ({ children }) => <Code>{children}</Code>,
        table: ({ children }) => <Table>{children}</Table>,
        tableHead: ({ children }) => <Thead>{children}</Thead>,
        tableBody: ({ children }) => <Tbody>{children}</Tbody>,
        tableRow: ({ children }) => <Tr>{children}</Tr>,
        tableCell: ({ children }) => <Td>{children}</Td>,
      }}
      children={content}
    />
  );
};

export default MarkdownView;
