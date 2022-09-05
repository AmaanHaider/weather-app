import { SunIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ForeCast = () => {
  return (
    <Container maxW="750px" mt={5}>
      <Heading>Todays Forecast for New Your City,Ny,United States</Heading>
      <Box mt={5}  sx={{
          display:"flex",
          gap:"50px",
          alignItems:"center"
        }}>
        <Box>
          <Text>Morning</Text>
          <Text>25c</Text>
          <SunIcon/>
          <Text>0%</Text>
        </Box>
        <Box>
          <Text>Morning</Text>
          <Text>25c</Text>
          <SunIcon/>
          <Text>0%</Text>
        </Box>
        <Box>
          <Text>Morning</Text>
          <Text>25c</Text>
          <SunIcon/>
          <Text>0%</Text>
        </Box>
        <Box>
          <Text>Morning</Text>
          <Text>25c</Text>
          <SunIcon/>
          <Text>0%</Text>
        </Box>
      </Box>

      <Button  mt={5} colorScheme="messenger">Next Hours</Button>
    </Container>
  );
};

export default ForeCast;
