import { Tooltip } from "@chakra-ui/react";

const Something = ({ children }) => {
    return <Tooltip label="Hover me!">{children}</Tooltip>;
};

export default Something;
