import { Box, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";

const TopComp = () => {
  return (
    <Container>
      <Text fontSize="4xl">New York,city</Text>
      <Box>
        <Box>
            <Text fontSize="70px">
                21c
            </Text>
            <Text fontSize="30px">
              Clear
            </Text>
            <Text fontSize="30px">
              Day 30 . Night 20
            </Text>
        </Box>
        <Box></Box>
      </Box>
    </Container>
  );
};

export default TopComp;
