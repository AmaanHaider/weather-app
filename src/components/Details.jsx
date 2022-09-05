import { SmallAddIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FaTemperatureHigh,FaWind} from 'react-icons/fa';
import {AiFillEye} from 'react-icons/ai'
 import {BsDropletHalf} from 'react-icons/bs'
import {BiSun} from 'react-icons/bi'
import {WiHumidity,WiMoonAltWaxingCrescent3} from 'react-icons/wi'



const Details = () => {
  return (
    <Container maxW="750px" mt={7} sx={{
      borderRadius:"8px",
      backgroundColor:"white"
    }}>
      <Heading size='md'>Weather Today in New York City,NY,United States</Heading>
      <Box sx={{
        display:"flex",
        gap:"50px"
      }}>
      
      <Box  sx={{
        border:"1px solid red",
        width:"350px"
      }}>
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
            <FaTemperatureHigh />

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
            <WiHumidity/>

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
            <AiFillEye />

            <Text>High/Low</Text>
          </Box>
          <Text>30/20</Text>
        </Box>
      </Box>

      <Box sx={{
        border:"1px solid red",
        width:"350px"
      }}>
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
            <FaWind />

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
            <BsDropletHalf />

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
            <BiSun />

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
            <WiMoonAltWaxingCrescent3 />

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
