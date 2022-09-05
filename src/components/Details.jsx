import { SmallAddIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Details = () => {
  return (
    <Container maxW="750px" mt={5}>
      <Heading>Weather Today in New York City,NY,United States</Heading>
      <Box sx={{
        display:"flex"
      }}>
      
      <Box>
        <Text fontSize="50">21</Text>
        <Text fontSize="15">Feels Like</Text>
        <Box
          sx={{
            borderTop: "1px solid grey",
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <SmallAddIcon />

            <Text>High/Low</Text>
          </Box>
          <Text>30/20</Text>
        </Box>
        <Box
          sx={{
            borderTop: "1px solid grey",
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <SmallAddIcon />

            <Text>High/Low</Text>
          </Box>
          <Text>30/20</Text>
        </Box>
        <Box
          sx={{
            borderTop: "1px solid grey",
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <SmallAddIcon />

            <Text>High/Low</Text>
          </Box>
          <Text>30/20</Text>
        </Box>
        <Box
          sx={{
            borderTop: "1px solid grey",
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <SmallAddIcon />

            <Text>High/Low</Text>
          </Box>
          <Text>30/20</Text>
        </Box>
      </Box>

      <Box>
        <Text fontSize="50">21</Text>
        <Text fontSize="15">Feels Like</Text>
        <Box
          sx={{
            borderTop: "1px solid grey",
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <SmallAddIcon />

            <Text>High/Low</Text>
          </Box>
          <Text>30/20</Text>
        </Box>
        <Box
          sx={{
            borderTop: "1px solid grey",
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <SmallAddIcon />

            <Text>High/Low</Text>
          </Box>
          <Text>30/20</Text>
        </Box>
        <Box
          sx={{
            borderTop: "1px solid grey",
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <SmallAddIcon />

            <Text>High/Low</Text>
          </Box>
          <Text>30/20</Text>
        </Box>
        <Box
          sx={{
            borderTop: "1px solid grey",
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <SmallAddIcon />

            <Text>High/Low</Text>
          </Box>
          <Text>30/20</Text>
        </Box>
      </Box>

      </Box>

    </Container>
  );
};

export default Details;
