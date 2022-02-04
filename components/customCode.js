import { useState } from "react";
import styled from "@emotion/styled";
import Highlight, { defaultProps } from "prism-react-renderer";
import { Box, Button, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import parsePart from "../lib/parseRange";

const Pre = styled.pre`
    text-align: left;
    margin: 1em 0;
    padding: 0.5em;
    overflow: scroll;
    font-size: 14px;
`;

const Line = styled.div`
    display: table-row;
`;

const LineNo = styled.span`
    display: table-cell;
    text-align: right;
    padding-right: 1em;
    user-select: none;
    opacity: 0.5;
`;

const LineContent = styled.span`
    display: table-cell;
`;

const shouldHighlight = (raw) => {
    const parsedRange = parsePart(raw);
    if (parsedRange) {
        return (index) => parsedRange.includes(index);
    } else {
        return () => false;
    }
};

const CustomCode = (props) => {
    console.log(props);
    const [currLabel, setCurrLabel] = useState("Copy");

    const className = props.children.props.className || "";
    const code = props.children.props.children.trim();
    const language = className.replace(/language-/, "");
    const file = props.children.props.file;

    const rawRange = props.children.props.highlights || "";
    const highlights = shouldHighlight(rawRange);

    const copyToClibBoard = (copyText) => {
        let data = [
            new ClipboardItem({
                "text/plain": new Blob([copyText], { type: "text/plain" }),
            }),
        ];
        navigator.clipboard.write(data).then(
            function () {
                setCurrLabel("Copied");
                setTimeout(() => {
                    setCurrLabel("Copy");
                }, 1000);
            },
            function () {
                setCurrLabel(
                    "There are errors, can you report on my Github? Link in the footer"
                );
            }
        );
    };

    return (
        <Highlight
            {...defaultProps}
            theme={undefined}
            code={code}
            language={language}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Pre className={className} style={style}>
                    <Box>
                        <Flex>
                            <Text textTransform="capitalize" mr="3">
                                {language}
                            </Text>
                            {file && <Text color="gray.500">{file}</Text>}
                            <Spacer />
                            <Button
                                size="sm"
                                fontSize="14"
                                onClick={() =>
                                    copyToClibBoard(
                                        props.children.props.children
                                    )
                                }
                            >
                                {currLabel}
                            </Button>
                        </Flex>
                    </Box>
                    {tokens.map((line, i) => (
                        <Line key={i} {...getLineProps({ line, key: i })}>
                            <LineNo>{i + 1}</LineNo>
                            <LineContent
                                style={{
                                    background: highlights(i + 1)
                                        ? "#2e2e2e"
                                        : "transparent",
                                }}
                            >
                                {line.map((token, key) => (
                                    <span
                                        key={key}
                                        {...getTokenProps({ token, key })}
                                    />
                                ))}
                            </LineContent>
                        </Line>
                    ))}
                </Pre>
            )}
        </Highlight>
    );
};

export default CustomCode;
