import "../styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../src/theme/test";
import "../src/theme/style.css";

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />;
        </ChakraProvider>
    );
}
