import { SunIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ForeCast = () => {
  return (
    <Container p={4}  maxW="750px" mt={7} sx={{
      borderRadius:"8px",
      backgroundColor:"white"
    }}>
      <Heading size='md'>Todays Forecast for New Your City,NY,United States</Heading>
    

      <Box mt={5}  sx={{
          display:"flex",
          gap:"20px"
        }}>
        <Box sx={{
      
          borderRight:"1px solid grey",
          width:"22%"
        
        }}>
          <Text>Morning</Text>
          <Text>25c</Text>
          <SunIcon/>
          <Text>0%</Text>
        </Box>
        <Box 
        sx={{
      
          borderRight:"1px solid grey",
          width:"22%"
        
        }}
        >
          <Text>Afternoon</Text>
          <Text>25c</Text>
          <SunIcon/>
          <Text>0%</Text>
        </Box>
        <Box sx={{
      
          borderRight:"1px solid grey",
          width:"22%"
        
        }}>
          <Text>Evening</Text>
          <Text>25c</Text>
          <SunIcon/>
          <Text>0%</Text>
        </Box>
        <Box sx={{
      
          borderRight:"1px solid grey",
          width:"22%"
        
        }}>
          <Text sx={{
            fontWeight:"bold"
          }}>Overnight</Text>
          <Text>25c</Text>
          <SunIcon/>
          <Text>0%</Text>
        </Box>
      </Box>
   
      <Button mt={5} colorScheme="messenger">Next Hours</Button>
    </Container>
  );
};

export default ForeCast;
