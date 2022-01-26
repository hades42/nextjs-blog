import {
    VStack,
    Heading,
    Text,
    GridItem,
    SimpleGrid,
    FormControl,
    FormLabel,
    Input,
    Select,
    Checkbox,
    Button,
} from "@chakra-ui/react";

const Details = () => {
    return (
        <VStack w="full" h="full" spacing={10} alignItems="flex-start" p={10}>
            <VStack spacing={3} alignItems="flex-start">
                <Heading size="2xl">Your details</Heading>
                <Text>
                    if you alreayd have an account, click here to sign in
                </Text>
            </VStack>
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder="John"></Input>
                    </FormControl>
                </GridItem>

                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder="Doe"></Input>
                    </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Address</FormLabel>
                        <Input placeholder="Your Address"></Input>
                    </FormControl>
                </GridItem>

                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>City</FormLabel>
                        <Input placeholder="Your City"></Input>
                    </FormControl>
                </GridItem>

                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Country</FormLabel>
                        <Select>
                            <option value="usa">
                                United States of America
                            </option>
                            <option value="uae">United Arab Emirates</option>
                            <option value="nmk">NOrt Macedonia</option>
                            <option value="de">Germany</option>
                        </Select>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <Checkbox defaultChecked>Ship to billing address</Checkbox>
                </GridItem>

                <GridItem colSpan={2}>
                    <Button size="lg" w="full">
                        Place Order
                    </Button>
                </GridItem>
            </SimpleGrid>
        </VStack>
    );
};

export default Details;
