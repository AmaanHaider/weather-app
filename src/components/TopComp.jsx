import { MoonIcon } from "@chakra-ui/icons";
import { Box, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";

const TopComp = () => {
  return (
    <Container p={5} maxW="750px" mt={2} sx={{
      borderRadius:"8px",
     backgroundImage:`url("https://images.unsplash.com/photo-1435224668334-0f82ec57b605?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)` 
    }}>
      <Text color="white" fontSize="4xl">New York,city</Text>
      <Box sx={{
        display:"flex",
        gap:"450px"
      }}>
        <Box>
            <Text color="white" fontSize="70px">
                21c
            </Text>
            <Text color="white" fontSize="30px">
              Clear
            </Text>
            <Text color="white" fontSize="30px">
              Day 30 . Night 20
            </Text>
        </Box>
        <Box>
          <MoonIcon   color="white"/>
        </Box>
      </Box>
    </Container>
  );
};

export default TopComp;
