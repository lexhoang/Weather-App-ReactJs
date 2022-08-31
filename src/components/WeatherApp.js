import React, { useState } from "react";

import { Grid, Typography, FormGroup, Container } from "@mui/material";
import { Col, Row } from "reactstrap";

import iconSun from "../assets/images/02d.png";

import d01 from "../assets/images/01d.png";
import d02 from "../assets/images/02d.png";
import d03 from "../assets/images/03d.png";
import d04 from "../assets/images/04d.png";
import d09 from "../assets/images/09d.png";
import d10 from "../assets/images/10d.png";
import d11 from "../assets/images/11d.png";
import d13 from "../assets/images/13d.png";
import d50 from "../assets/images/50d.png";
import n01 from "../assets/images/01n.png";
import n02 from "../assets/images/02n.png";
import n03 from "../assets/images/03n.png";
import n04 from "../assets/images/04n.png";
import n09 from "../assets/images/09n.png";
import n10 from "../assets/images/10n.png";
import n11 from "../assets/images/11n.png";
import n13 from "../assets/images/13n.png";
import n50 from "../assets/images/50n.png";

function WeatherApp() {

    const [weather, setWeather] = useState({});

    const search = async (data) => {
        console.log(data);

        await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${data}&APPID=6557810176c36fac5f0db536711a6c52`
        )
            .then((res) => res.json())
            .then((result) => {
                setWeather(result);
                console.log(result);
            });
    };

    const day = (data) => {
        if (data == "0") {
            return "Sunday";
        }
        if (data == "1") {
            return "Monday";
        }
        if (data == "2") {
            return "Tuesday";
        }
        if (data == "3") {
            return "Wednesday";
        }
        if (data == "4") {
            return "Thursday";
        }
        if (data == "5") {
            return "Friday";
        }
        if (data == "6") {
            return "Saturday";
        }
    };


    return (

           <Container>
             <Grid>
                {
                    weather.list == undefined ? (
                        <>
                            <Grid style={{ margin: "30px 2%px" }} item>
                                <FormGroup>
                                    <Row
                                        style={{
                                            marginBottom: "130px",
                                            padding: "0 30px",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Col xs="4">
                                            <img src={iconSun} style={{ width: "100%" }} />
                                        </Col>
                                        <Col xs="8">
                                            <Typography
                                                color={"#365a7a"}
                                                variant="h2"
                                                fontWeight={"bold"}
                                            >
                                                Weather Forecast
                                            </Typography>
                                        </Col>
                                    </Row>
                                    <Row style={{ margin: "0 auto", width: "80%" }}>
                                        <Col xs="12">
                                            <input
                                                placeholder="Enter a City..."
                                                style={{
                                                    transform: "translate(7%, 0)",
                                                    fontSize: "1.5rem",
                                                    height: "7vh",
                                                    width: "90%",
                                                    borderRadius: "40px",
                                                    paddingLeft: "20px",
                                                }}
                                                onKeyPress={(event) => {
                                                    if (event.key === "Enter") {
                                                        search(event.target.value);
                                                    }
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </Grid>
                        </>
                    )
                        :
                        (
                            <>
                                <Grid item margin={"auto"}>
                                    {/* input */}
                                    <Row
                                        style={{
                                            margin: "0 auto",
                                            width: "80%",
                                            transform: "translate(0%, -250%)",
                                        }}
                                    >
                                        <Col xs="12">
                                            <input
                                                placeholder="Enter a City..."
                                                style={{
                                                    fontSize: "1.5rem",
                                                    height: "7vh",
                                                    width: "100%",
                                                    borderRadius: "40px",
                                                    paddingLeft: "20px",
                                                }}
                                                onKeyPress={(event) => {
                                                    if (event.key === "Enter") {
                                                        search(event.target.value);
                                                    }
                                                }}
                                            />
                                        </Col>
                                    </Row>

                                    {/* form */}
                                    <FormGroup style={{ transform: "translate(0%, -7%)" }}>
                                        {/* form trên */}
                                        <Row
                                            style={{
                                                marginBottom: "130px",
                                                padding: "0 30px",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Col xs="6">
                                                <img style={{ width: "80%" }} src={require(`../assets/images/${weather.list[0].weather[0].icon}.png`)} />
                                            </Col>

                                            <Col xs="6">
                                                <Typography
                                                    mt={2}
                                                    mb={1}
                                                    variant="p"
                                                    style={{ fontSize: "1.5rem" }}
                                                >
                                                    Today
                                                </Typography>
                                                <Typography
                                                    mb={2}
                                                    variant="h3"
                                                    style={{ fontWeight: "750" }}
                                                >
                                                    {weather.city.name}
                                                </Typography>
                                                <Typography
                                                    variant="p"
                                                    color={"#113555"}
                                                    style={{ fontSize: "1.5rem" }}
                                                    mb={1}
                                                >
                                                    Temperature:{" "}
                                                    {(weather.list[0].main.temp - 273.15).toFixed(0)} °C
                                                </Typography>
                                                <br />
                                                <Typography
                                                    variant="p"
                                                    color={"#113555"}
                                                    style={{ fontSize: "1.5rem" }}
                                                >
                                                    {weather.list[0].weather[0].description}
                                                </Typography>
                                            </Col>
                                        </Row>

                                        {/* form dưới */}
                                        <Row
                                            style={{
                                                padding: "0 40px",
                                                transform: "translate(0%, -20%)",
                                            }}
                                        >
                                            {/* ngày 1 */}
                                            <Col
                                                style={{
                                                    margin: " 0 auto",
                                                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                                                    boxShadow: "0px 0px 10px silver",
                                                    height: "25vh",
                                                    width: "13vw",
                                                    borderRadius: "30px",
                                                }}
                                                xs={3}
                                            >
                                                <Row style={{ padding: "10px" }}>
                                                    <Typography
                                                        style={{
                                                            margin: "0 auto",
                                                            textAlign: "center",
                                                            fontSize: "1.3rem",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {day(
                                                            new Date(weather.list[7].dt * 1000 * 1000).getDay()
                                                        )}
                                                    </Typography>
                                                    <Typography
                                                        style={{
                                                            margin: "0 auto",
                                                            textAlign: "center",
                                                            fontSize: "1.3rem",
                                                            fontWeight: "bold",
                                                            transform: "translate(0%, -10%)",
                                                        }}
                                                    >
                                                        <img style={{ width: "80%" }} src={require(`../assets/images/${weather.list[7].weather[0].icon}.png`)} />
                                                    </Typography>
                                                    <Typography
                                                        style={{
                                                            margin: "0 auto",
                                                            textAlign: "center",
                                                            fontSize: "1.3rem",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {(weather.list[7].main.temp - 273.15).toFixed(0)} °C
                                                    </Typography>
                                                </Row>
                                            </Col>

                                            {/* ngày 2 */}
                                            <Col
                                                style={{
                                                    margin: " 0 auto",
                                                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                                                    margin: "auto auto",
                                                    boxShadow: "0px 0px 10px silver",
                                                    height: "25vh",
                                                    width: "13vw",
                                                    borderRadius: "30px",
                                                }}
                                                xs={3}
                                            >
                                                <Row style={{ padding: "10px" }}>
                                                    <Typography
                                                        style={{
                                                            margin: "0 auto",
                                                            textAlign: "center",
                                                            fontSize: "1.3rem",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {day(
                                                            new Date(weather.list[12].dt * 1000 * 1000).getDay()
                                                        )}
                                                    </Typography>
                                                    <Typography
                                                        style={{
                                                            margin: "0 auto",
                                                            textAlign: "center",
                                                            fontSize: "1.3rem",
                                                            fontWeight: "bold",
                                                            transform: "translate(0%, -10%)",
                                                        }}
                                                    >
                                                        <img style={{ width: "80%" }} src={require(`../assets/images/${weather.list[12].weather[0].icon}.png`)} />
                                                    </Typography>
                                                    <Typography
                                                        style={{
                                                            margin: "0 auto",
                                                            textAlign: "center",
                                                            fontSize: "1.3rem",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {(weather.list[12].main.temp - 273.15).toFixed(0)} °C
                                                    </Typography>
                                                </Row>
                                            </Col>

                                            {/* ngày 3 */}
                                            <Col
                                                style={{
                                                    margin: " 0 auto",
                                                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                                                    margin: "auto auto",
                                                    boxShadow: "0px 0px 10px silver",
                                                    height: "25vh",
                                                    width: "13vw",
                                                    borderRadius: "30px",
                                                }}
                                                xs={3}
                                            >
                                                <Row style={{ padding: "10px" }}>
                                                    <Typography
                                                        style={{
                                                            margin: "0 auto",
                                                            textAlign: "center",
                                                            fontSize: "1.3rem",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {day(
                                                            new Date(weather.list[18].dt * 1000 * 1000).getDay()
                                                        )}
                                                    </Typography>
                                                    <Typography
                                                        style={{
                                                            margin: "0 auto",
                                                            textAlign: "center",
                                                            fontSize: "1.3rem",
                                                            fontWeight: "bold",
                                                            transform: "translate(0%, -10%)",
                                                        }}
                                                    >
                                                        <img style={{ width: "80%" }} src={require(`../assets/images/${weather.list[18].weather[0].icon}.png`)} />
                                                    </Typography>
                                                    <Typography
                                                        style={{
                                                            margin: "0 auto",
                                                            textAlign: "center",
                                                            fontSize: "1.3rem",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {(weather.list[18].main.temp - 273.15).toFixed(0)} °C
                                                    </Typography>
                                                </Row>
                                            </Col>

                                            {/* ngày 4 */}
                                            <Col
                                                style={{
                                                    margin: " 0 auto",
                                                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                                                    margin: "auto auto",
                                                    boxShadow: "0px 0px 10px silver",
                                                    height: "25vh",
                                                    width: "13vw",
                                                    borderRadius: "30px",
                                                }}
                                                xs={3}
                                            >
                                                <Row style={{ padding: "10px" }}>
                                                    <Typography
                                                        style={{
                                                            margin: "0 auto",
                                                            textAlign: "center",
                                                            fontSize: "1.3rem",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {day(
                                                            new Date(weather.list[24].dt * 1000 * 1000).getDay()
                                                        )}
                                                    </Typography>
                                                    <Typography
                                                        style={{
                                                            margin: "0 auto",
                                                            textAlign: "center",
                                                            fontSize: "1.3rem",
                                                            fontWeight: "bold",
                                                            transform: "translate(0%, -10%)",
                                                        }}
                                                    >
                                                        <img style={{ width: "80%" }} src={require(`../assets/images/${weather.list[24].weather[0].icon}.png`)} />
                                                    </Typography>
                                                    <Typography
                                                        style={{
                                                            margin: "0 auto",
                                                            textAlign: "center",
                                                            fontSize: "1.3rem",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {(weather.list[24].main.temp - 273.15).toFixed(0)} °C
                                                    </Typography>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Grid>
                            </>
                        )}
            </Grid>
           </Container>
    );
}

export default WeatherApp;