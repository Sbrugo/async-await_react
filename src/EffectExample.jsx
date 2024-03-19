import React, { useState, useEffect } from "react";

export default function EffectExample() {
  //useState
  const [vector, setVector] = useState([]);

  //funcion para llamar los datos de la API
  const getData = async () => {
    const url = "https://jsonplaceholder.typicode.com/comments";
    const data = await fetch(url);
    const json = await data.json();
    setVector(json);
  };
  useEffect(() => {
    getData();
  });
  return (
    <div>
      <ul>
        {vector.map((object) => (
          <li>{object.email}</li>
        ))}
      </ul>
    </div>
  );
}
