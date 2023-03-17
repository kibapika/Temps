import React from "react";
import axios from "axios";
import { useState } from "react";

const ThreeDays = () => {
  const [response, setResponse] = useState(null);

  const fetchFiveDays = async () => {
    try {
      const res = await axios.get(
        "https://weatherapi-com.p.rapidapi.com/forecast.json",
        {
          headers: {
            "X-RapidAPI-Key":
              "4c2350f8fdmsh67c94cfd9be6a99p12e932jsn8bf982d7a5dd",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
          },
          params: { q: 'New York', days: '5' },
        }
      );
      setResponse(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const showWeather = async () => {
    try {
      console.log("this works");
      fetchFiveDays();
      console.log("results --->", response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="text-xl">5 Day Forecast</h1>
      <button
        className="border-black border-solid border-2"
        onClick={showWeather}
      >
        Click to Show
      </button>
      {response !== null ? (
        <div>
          <section id="day0">
            <div>
              <p>{response.forecast.forecastday[0].date}</p>
              <p>{response.location.name}</p>
            </div>
            <div>
              <p>Avg temp {response.forecast.forecastday[0].day.avgtemp_c}C</p>
              <p>Avg temp {response.forecast.forecastday[0].day.avgtemp_f}F</p>
            </div>
            <div>
              <p>MinTemp {response.forecast.forecastday[0].day.mintemp_c}C</p>
              <p>MinTemp {response.forecast.forecastday[0].day.mintemp_f}F</p>
            </div>
            <div>
              <p>MaxTemp {response.forecast.forecastday[0].day.maxtemp_c}C</p>
              <p>MaxTemp {response.forecast.forecastday[0].day.maxtemp_f}F</p>
            </div>
            <div>
              <p>
                Conditions {response.forecast.forecastday[0].day.condition.text}
              </p>
              <img
                alt="img"
                src={response.forecast.forecastday[0].day.condition.icon}
              />
            </div>
          </section>
          <section id="day1">
            <div>
              <p>{response.forecast.forecastday[1].date}</p>
              <p>{response.location.name}</p>
            </div>
            <div>
              <p>Avg temp {response.forecast.forecastday[1].day.avgtemp_c}C</p>
              <p>Avg temp {response.forecast.forecastday[1].day.avgtemp_f}F</p>
            </div>
            <div>
              <p>MinTemp {response.forecast.forecastday[1].day.mintemp_c}C</p>
              <p>MinTemp {response.forecast.forecastday[1].day.mintemp_f}F</p>
            </div>
            <div>
              <p>MaxTemp {response.forecast.forecastday[1].day.maxtemp_c}C</p>
              <p>MaxTemp {response.forecast.forecastday[1].day.maxtemp_f}F</p>
            </div>
            <div>
              <p>
                Conditions {response.forecast.forecastday[1].day.condition.text}
              </p>
              <img
                alt="img"
                src={response.forecast.forecastday[1].day.condition.icon}
              />
            </div>
          </section>
          <section id="day2">
            <div>
              <p>{response.forecast.forecastday[2].date}</p>
              <p>{response.location.name}</p>
            </div>
            <div>
              <p>Avg temp {response.forecast.forecastday[2].day.avgtemp_c}C</p>
              <p>Avg temp {response.forecast.forecastday[2].day.avgtemp_f}F</p>
            </div>
            <div>
              <p>MinTemp {response.forecast.forecastday[2].day.mintemp_c}C</p>
              <p>MinTemp {response.forecast.forecastday[2].day.mintemp_f}F</p>
            </div>
            <div>
              <p>MaxTemp {response.forecast.forecastday[2].day.maxtemp_c}C</p>
              <p>MaxTemp {response.forecast.forecastday[2].day.maxtemp_f}F</p>
            </div>
            <div>
              <p>
                Conditions {response.forecast.forecastday[2].day.condition.text}
              </p>
              <img
                alt="img"
                src={response.forecast.forecastday[2].day.condition.icon}
              />
            </div>
          </section>
        </div>
      ) : null}
    </div>
  );
};

export default ThreeDays;
