import React, { useState, useEffect } from "react";
const axios = require("axios");

export default function Classes() {
  const [loading, setLoading] = useState("start");
  const [classList, setClassList] = useState("");
  const [activeClass, setActiveClass] = useState("");

  useEffect(() => {
    if (loading === "start") {
      console.log("API CALL!", activeClass);
      axios
        .get("https://www.dnd5eapi.co/api/classes")
        .then((response) => {
          //   console.log(response.data.results);
          setClassList(response.data.results);
          response.data.results.map((element) => {
            let button = document.createElement("button");
            button.innerText = element.name;
            document.getElementById("output").append(button);
            return null;
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
    return () => {
      // cleanup;
    };
  }, [loading]);

  return (
    <main>
      <h2>Classes</h2>
      {/* <button
        onClick={() => {
          setLoading(true);
          setActiveClass("barbarian");
        }}
      >
        Barbarian
      </button> */}
      {loading === "start"
        ? () => {
            console.log(classList);
          }
        : null}
      <div id="output"></div>
    </main>
  );
}
