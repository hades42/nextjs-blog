import "../styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme/test";
import "../src/theme/style.css";
import codeTheme from "../src/theme/prism";
import { Global, css } from "@emotion/react";
import MyH1 from "../components/CustomHeading";
import { MDXProvider } from "@mdx-js/react";
import Test from "../components/CustomHeading";
import Something from "../components/SomethingCool";
import CustomCode from "../components/customCode";

const components = { h1: MyH1, Test, Something, pre: CustomCode };

const GlobalStyle = () => {
    return (
        <Global
            styles={css`
                ${codeTheme}
            `}
        ></Global>
    );
};

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <GlobalStyle />
            <MDXProvider components={components}>
                <Component {...pageProps} />;
            </MDXProvider>
        </ChakraProvider>
    );
}
