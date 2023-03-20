import React from "react";
import axios from "axios";
import { useState } from "react";

const Current = () => {
  const [response, setResponse] = useState(null);
  const [location, setLocation] = useState("");

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
        fetchToday();
        console.log("results --->", response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="text-xl">Current Forecast</h1>
      <div id="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
          onKeyPress={search}
          type="text"
        ></input>
      </div>
      {response !== null ? (
        <section id="today">
          <div>
            <p>{response.location.name}</p>
            <p>{response.current.last_updated}</p>
          </div>
          <div>
            <p>Conditions {response.current.condition.text}</p>
            <img alt="img" src={response.current.condition.icon} />
          </div>
          <div>
            <p>Feels like {response.current.feelslike_c}C</p>
            <p>Feels like {response.current.feelslike_f}F</p>
          </div>
          <div>
            <p>Temp {response.current.temp_c}C</p>
            <p>Temp {response.current.temp_f}F</p>
          </div>
          <div>
            <p>Percipitation {response.current.precip_in}</p>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default Current;
