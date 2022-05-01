import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

// IMAGES
import MercuryImage from "./assets/mercury.webp";
import venusImage from "./assets/venus.webp";
import MarsImage from "./assets/mars.webp";
import JupiterImage from "./assets/jupiter.webp";
import SaturnIMage from "./assets/saturn.webp";
import NeptuneImage from "./assets/neptune.webp";
import UranusImage from "./assets/uranus.webp";

const planets = [
  {
    name: "Mercury",
    gravity: 3.7,
    img: MercuryImage,
  },
  {
    name: "Venus",
    gravity: 8.87,
    img: venusImage,
  },
  {
    name: "Mars",
    gravity: 3.7,
    img: MarsImage,
  },
  {
    name: "Jupiter",
    gravity: 24.79,
    img: JupiterImage,
  },
  {
    name: "Saturn",
    gravity: 10.44,
    img: SaturnIMage,
  },
  {
    name: "Neptuno",
    gravity: 11.15,
    img: NeptuneImage,
  },
  {
    name: "Urano",
    gravity: 8.7,
    img: UranusImage,
  },
];

export default function App() {
  const [planet, setPlanet] = useState("");
  const [planetImg, setPlanetImg] = useState("");
  const [userWeight, setUserWeight] = useState(0);
  const [finalWeight, setFinalWeight] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [msg, setMsg] = useState("");

  const setInfo = () => {
    setMsg("");

    const _weight = document.getElementById("user_weight").value;

    if (_weight <= 0 || _weight === "") {
      setMsg("Please, type a valid weight");
      return false;
    }

    if (planet === "") {
      setMsg("Please, sleect a planet");
      return false;
    }

    if (_weight) {
      for (let i = 0; i < planets.length; i++) {
        if (planets[i].name.toLowerCase() === planet) {
          setPlanet(planets[i].name);
          setUserWeight(_weight);

          setFinalWeight(Math.round((planets[i].gravity * _weight) / 9.8));
          setShowResult(!showResult);
          setPlanetImg(planets[i].img);
        }
      }
    }
  };

  console.log("IF YOU CAN SEE THIS TEXT THAT'S MEAN... YOU ARE A DEVELOPER :)");

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" align="center" color="#000000">
          Your weight on another planet
        </Typography>

        {showResult ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 2,
            }}
          >
            <img
              src={`${planetImg}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${planetImg}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={`${planet}`}
              width={350}
              loading="lazy"
            />

            <Box
              ml={4}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography mr={2} variant="body1" color="#000000">
                {`Your normal weight is ${userWeight}kg, but on ${planet} is ${finalWeight}kg`}
              </Typography>

              <Button
                onClick={() => setShowResult(!showResult)}
                variant="contained"
              >
                RESET
              </Button>
            </Box>
          </Box>
        ) : (
          <Box>
            <ImageList
              sx={{ width: "100%", height: "auto" }}
              cols={7}
              rowHeight={300}
              variant="quilted"
            >
              {planets.map((item, index) => (
                <Tooltip
                  arrow
                  title={`Click to select ${item.name}`}
                  key={item.img + index}
                >
                  <ImageListItem
                    onClick={() => setPlanet(item.name.toLocaleLowerCase())}
                  >
                    <img
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.name}
                      loading="lazy"
                    />
                  </ImageListItem>
                </Tooltip>
              ))}
            </ImageList>

            <Typography align="center" variant="subtitle1" color="#000000">
              {msg}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 2,
              }}
            >
              <TextField
                id="user_weight"
                label="type your weight"
                placeholder="your weight in kg"
                sx={{ mr: 1 }}
                type={"number"}
                autoComplete="off"
              />

              <Button onClick={() => setInfo()} variant="contained">
                View result
              </Button>
            </Box>
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <Button href="https:jsmarenco-dev.web.app">
            Visit my portafolio
          </Button>
        </Box>
      </Container>
    </>
  );
}
