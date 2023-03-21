import React from "react";
import axios from "axios";
import { useState } from "react";

const ThreeDays = () => {
  const [response, setResponse] = useState(null);
  const [location, setLocation] = useState("");
  const [fahren, setFahren] = useState(false);

  const fetchThreeDays = async () => {
    try {
      const res = await axios.get(
        "https://weatherapi-com.p.rapidapi.com/forecast.json",
        {
          headers: {
            "X-RapidAPI-Key":
              "4c2350f8fdmsh67c94cfd9be6a99p12e932jsn8bf982d7a5dd",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
          },
          params: { q: location, days: "3" },
        }
      );
      setResponse(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const search = async (evt) => {
    try {
      if (evt.key === "Enter") {
        evt.preventDefault();
        fetchThreeDays();
        // console.log("results --->", response);
        setLocation("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const changeTempView = () => {
    setFahren(!fahren);
  };

  return (
    <div className="flex flex-col justify-center items-center pt-5 w-[50rem]">
      <section className="flex flex-row justify-center items-center">
        <h1 className="text-xl mr-5">3-Day Forecast</h1>
        {/* ------------------------------------------- */}
        <div className="search">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={search}
            type="text"
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Enter Location</label>
        </div>
        {/* ------------------------------------------- */}
        <div className="toggle-button-cover">
          <div className="button r" id="button-1">
            <input
              type="checkbox"
              className="checkbox"
              onClick={changeTempView}
            />
            <div className="knobs"></div>
            <div className="layer"></div>
          </div>
        </div>
      </section>
      {response !== null ? (
        <div>
          {fahren === false ? (
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 w-[80vw]">
              <section
                id="day0"
                className="backdrop-blur-sm bg-white/20 rounded-md p-3 flex flex-col justify-center items-center h-[32vh] w-fit"
              >
                <div className="flex flex-row justify-evenly items-center w-[15rem]">
                  <span className="text-[24px]">{response.location.name}</span>
                  <span>{response.forecast.forecastday[0].date}</span>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <div className="flex flex-col justify-center items-center pt-2">
                    <span className="text-[25px] text-center pb-2">
                      Avg {response.forecast.forecastday[0].day.avgtemp_f}
                      °F
                    </span>
                    <div className="w-full grid grid-cols-2 text-center">
                      <span>Min</span>
                      <spa>Max</spa>
                      <span>
                        {response.forecast.forecastday[0].day.mintemp_f}°F
                      </span>
                      <span>
                        {response.forecast.forecastday[0].day.maxtemp_f}°F
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <img
                      alt="img"
                      src={response.forecast.forecastday[0].day.condition.icon}
                      className="w-[80px]"
                    />
                    <span className="text-center">
                      {response.forecast.forecastday[0].day.condition.text}
                    </span>
                  </div>
                </div>
              </section>
              {/* ------------------------------------------- */}
              <section
                id="day1"
                className="backdrop-blur-sm bg-white/20 rounded-md p-3 flex flex-col justify-center items-center h-[32vh] w-fit"
              >
                <div className="flex flex-row justify-evenly items-center w-[15rem]">
                  <span className="text-[24px]">{response.location.name}</span>
                  <span>{response.forecast.forecastday[1].date}</span>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <div className="flex flex-col justify-center items-center pt-2">
                    <span className="text-[25px] text-center pb-2">
                      Avg {response.forecast.forecastday[1].day.avgtemp_f}
                      °F
                    </span>
                    <div className="w-full grid grid-cols-2 text-center">
                      <span>Min</span>
                      <spa>Max</spa>
                      <span>
                        {response.forecast.forecastday[1].day.mintemp_f}°F
                      </span>
                      <span>
                        {response.forecast.forecastday[1].day.maxtemp_f}°F
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <img
                      alt="img"
                      src={response.forecast.forecastday[1].day.condition.icon}
                      className="w-[80px]"
                    />
                    <span className="text-center">
                      {response.forecast.forecastday[1].day.condition.text}
                    </span>
                  </div>
                </div>
              </section>
              {/* ------------------------------------------- */}
              <section
                id="day2"
                className="backdrop-blur-sm bg-white/20 rounded-md p-3 flex flex-col justify-center items-center h-[32vh] w-fit"
              >
                <div className="flex flex-row justify-evenly items-center w-[15rem]">
                  <span className="text-[24px]">{response.location.name}</span>
                  <span>{response.forecast.forecastday[2].date}</span>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <div className="flex flex-col justify-center items-center pt-2">
                    <span className="text-[25px] text-center pb-2">
                      Avg {response.forecast.forecastday[2].day.avgtemp_f}
                      °F
                    </span>
                    <div className="w-full grid grid-cols-2 text-center">
                      <span>Min</span>
                      <spa>Max</spa>
                      <span>
                        {response.forecast.forecastday[2].day.mintemp_f}°F
                      </span>
                      <span>
                        {response.forecast.forecastday[2].day.maxtemp_f}°F
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <img
                      alt="img"
                      src={response.forecast.forecastday[2].day.condition.icon}
                      className="w-[80px]"
                    />
                    <span className="text-center">
                      {response.forecast.forecastday[2].day.condition.text}
                    </span>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            "hello"
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ThreeDays;
