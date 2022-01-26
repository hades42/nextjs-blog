import { Container, Flex } from "@chakra-ui/react";
import Details from "../../src/sections/details";
import Cart from "../../src/sections/cart";

export default function Test() {
    return (
        <Container maxWidth="container.xl" padding={0}>
            <Flex h="100vh" py={20}>
                <Details></Details>
                <Cart></Cart>
            </Flex>
        </Container>
    );
}
