import { SmallAddIcon } from "@chakra-ui/icons";
import { Box, Center, Container, Heading, Text } from "@chakra-ui/react";
import { FaTemperatureHigh, FaWind } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { BsDropletHalf } from "react-icons/bs";
import { BiSun } from "react-icons/bi";
import { WiHumidity, WiMoonAltWaxingCrescent3 } from "react-icons/wi";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Details = () => {


  // const [data, setData] = useState([]);
  
  // const fetchData = async () => {
    //    await axios
    //     .get("http://localhost:4040/query")
    //     .then((res) => setData(res.data.results.channel))
    //     .catch((err) => console.log(err.message));
    // };
    
    // useEffect(() => {
    //   fetchData();
    // }, []);
  // console.log(data);

  return (
    <Container p={4}
      maxW="750px"
      mt={7}
      sx={{
        borderRadius: "8px",
        backgroundColor: "white",
      }}
    >
      <Heading size="md">
        Weather Today in New York City,NY,United States
      </Heading>
      <Box
        mt={2}
        sx={{
          display: "flex",
          gap: "50px",
        }}
      >
        <Box
          sx={{
            width: "350px",
          }}
        >
          <Text fontSize="50">21</Text>
          <Text fontSize="15">Feels Like</Text>
          <Box
            mt={5}
            sx={{
              borderTop: "1px solid grey",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Center>
                <FaTemperatureHigh />
              </Center>

              <Text ml={4} fontSize="22px" mt={2}>
                High/Low
              </Text>
            </Box>
            <Text ml={4} fontSize="22px" mt={2}>
              30/20
            </Text>
          </Box>
          <Box
            sx={{
              borderTop: "1px solid grey",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Center>
                <WiHumidity />
              </Center>

              <Text ml={4} fontSize="22px" mt={2}>
                Humidity
              </Text>
            </Box>
            <Text ml={4} fontSize="22px" mt={2}>
              67%
            </Text>
          </Box>
          <Box
            sx={{
              borderTop: "1px solid grey",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Center>
                <SmallAddIcon />
              </Center>

              <Text ml={4} fontSize="22px" mt={2}>
                Pressure
              </Text>
            </Box>
            <Text ml={4} fontSize="22px" mt={2}>
              {" "}
              !012.5 mb
            </Text>
          </Box>
          <Box
            sx={{
              borderTop: "1px solid grey",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Center>
                <AiFillEye />
              </Center>

              <Text ml={4} fontSize="22px" mt={2}>
                Visibility
              </Text>
            </Box>
            <Text ml={4} fontSize="22px" mt={2}>
              Unlimited
            </Text>
          </Box>
        </Box>

        <Box
          sx={{
            width: "350px",
          }}
        >
          <Text fontSize="50">06:09 - 19:49</Text>

          <Box
            mt={10}
            sx={{
              borderTop: "1px solid grey",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Center>
                <FaWind />
              </Center>

              <Text ml={4} fontSize="22px" mt={2}>
                Wind
              </Text>
            </Box>
            <Text ml={4} fontSize="22px" mt={2}>
              8km/h
            </Text>
          </Box>
          <Box
            sx={{
              borderTop: "1px solid grey",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Center>
                <BsDropletHalf />
              </Center>

              <Text ml={4} fontSize="22px" mt={2}>
                Dew Point
              </Text>
            </Box>
            <Text ml={4} fontSize="22px" mt={2}>
              14
            </Text>
          </Box>
          <Box
            sx={{
              borderTop: "1px solid grey",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Center>
                <BiSun />
              </Center>

              <Text ml={4} fontSize="22px" mt={2}>
                UV Index
              </Text>
            </Box>
            <Text ml={4} fontSize="22px" mt={2}>
              0 of 10
            </Text>
          </Box>
          <Box
            sx={{
              borderTop: "1px solid grey",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Center>
                <WiMoonAltWaxingCrescent3 />
              </Center>

              <Text ml={4} fontSize="22px" mt={2}>
                Moon Phase
              </Text>
            </Box>
            <Text ml={4} fontSize="22px" mt={2}>
              Waning Gibbous
            </Text>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Details;
