import React, { useEffect, useState } from 'react';
import data from "../json/data.json";

function Movies() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(data.movies);
  }, []);

  return (
    <div>
      <p>Movies List</p>
      {datas.map((e) => (
        <div key={e.id}>
          <h2>{e.title}</h2>
          <p>Director: {e.director}</p>
          <img src={e.poster} alt={`${e.title} poster`} />
        </div>
      ))}
    </div>
  );
}

export default Movies;
