import React from "react";
import axios from "axios";
import { useState } from "react";

const Current = () => {
  const [response, setResponse] = useState(null);
  const [location, setLocation] = useState("");
  const [fahren, setFahren] = useState(false);

  const fetchToday = async () => {
    try {
      const res = await axios.get(
        "https://weatherapi-com.p.rapidapi.com/current.json",
        {
          headers: {
            "X-RapidAPI-Key":
              "4c2350f8fdmsh67c94cfd9be6a99p12e932jsn8bf982d7a5dd",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
          },
          params: { q: location },
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
        fetchToday();
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
    <div className="flex flex-col justify-center items-center pt-2 w-screen">
      <section className="w-full flex flex-row justify-evenly items-center text-center">
        <h1 className="text-xl">Current Forecast</h1>
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
        <div className="backdrop-blur-sm bg-white/20 rounded-md p-4 mt-5 w-fit">
          {fahren === false ? (
            <section id="today">
              <div className="flex flex-row justify-evenly items-center pb-1">
                <span className="text-[25px] pr-3">{response.location.name}</span>
                <div className="flex flex-col">
                  <span className="text-center">Last Updated</span>
                  <span>{response.current.last_updated}</span>
                </div>
              </div>
              <div className="flex flex-row justify-evenly items-center pt-2">
                <div className="flex flex-col justify-center items-center">
                  <span className="text-[50px]">
                    {response.current.temp_f}°F
                  </span>
                  <span className="italic">
                    Feels like {response.current.feelslike_f}°F
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    alt="img"
                    src={response.current.condition.icon}
                    className="w-[70px]"
                  />
                  <span>{response.current.condition.text}</span>
                </div>
              </div>
              <div className="flex flex-row justify-evenly items-center pt-3">
                <span>Percipitation {response.current.precip_in} in</span>
                <span>Wind {response.current.wind_mph} mph</span>
              </div>
            </section>
          ) : (
            <section id="today">
              <div className="flex flex-row justify-evenly items-center">
                <span className="text-[25px]">{response.location.name}</span>
                <span>Last Updated {response.current.last_updated}</span>
              </div>
              <div className="flex flex-row justify-evenly items-center pt-2">
                <div className="flex flex-col justify-center items-center">
                  <span className="text-[50px]">
                    {response.current.temp_c}°C
                  </span>
                  <span className="italic">
                    Feels like {response.current.feelslike_c}°C
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    alt="img"
                    src={response.current.condition.icon}
                    className="w-[70px]"
                  />
                  <span>{response.current.condition.text}</span>
                </div>
              </div>
              <div className="flex flex-row justify-evenly items-center pt-3">
                <span>Percipitation {response.current.precip_in} in</span>
                <span>Wind {response.current.wind_mph} mph</span>
              </div>
            </section>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Current;
