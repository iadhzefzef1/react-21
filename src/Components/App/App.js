import { useState, useEffect } from "react";
import AddMovie from "../AddMovie/AddMovie.js";
import "./app.css";
import MovieList from "../MovieList/MovieList.js";
import Filtring from "../Filtring/Filtring.js";
import Description from "../Description/Description.js";
import { Routes, Route } from "react-router-dom";

const info = [
  {
    title: "Chernobyl",
    id: "1",
    trailer: "https://www.youtube.com/embed/s9APLXM9Ei8",
    img: "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    description:
      "The events recount the circumstances of the explosion of the Chernobyl nuclear reactor in April 1986 in the Soviet Socialist Union, which became one of the worst human disasters in the twentieth century.",
    posterURL: "www.chernobyl.com",
    rating: 9.4,
  },
  {
    title: "Cosmos",
    id: "2",
    trailer: "https://www.youtube.com/embed/_erVOAbz420",
    img: "https://medias.unifrance.org/medias/68/83/152388/format_page/media.jpg",
    description:
      "An exploration of our discovery of the laws of nature and coordinates in space and time.",
    posterURL: "www.cosmos.com",
    rating: 9.3,
  },
  {
    title: "MR. ROBOT",
    id: "3",
    trailer: "https://www.youtube.com/embed/xIBiJ_SzJTA",
    img: "https://fr.web.img3.acsta.net/pictures/15/05/06/16/13/020977.jpg",
    description:
      "The series tells the story of a young man who suffers from social anxiety disorder. Working as a computer programmer in the morning and a hacker in the evening, he is assigned to work by a mysterious man who calls himself 'Mr. Robot' to infiltrate large corporations they believe are corrupting society.",
    posterURL: "www.mrrobot.com",
    rating: 8.5,
  },
  {
    title: "Planet Earth",
    id: "4",
    trailer: "https://www.youtube.com/embed/7n_1JZgDPf4",
    img: "https://fr.web.img3.acsta.net/pictures/19/10/28/13/13/5443545.jpg",
    description:
      "Emmy Award-winning, 11 episodes, five years in the making, the most expensive nature documentary series ever commissioned by the BBC, and the first to be filmed in high definition.",
    posterURL: "www.planetearth.com",
    rating: 9.4,
  },
  {
    title: "Prison Break",
    id: "5",
    trailer: "https://www.youtube.com/embed/AL9zLctDJaU",
    img: "https://upload.wikimedia.org/wikipedia/en/a/af/Prison_Break_FilmPoster.jpeg",
    description:
      "An innocent man is imprisoned and sentenced to death, and his only hope now is in his younger brother, who commits a crime in order to send himself to prison and devises a plan for their escape together, in addition to some other civilians in prison, they encounter a series of interesting and exciting problems and dilemmas, and they try to solve them in order to implement the plan, no matter what it costs them.",
    posterURL: "www.prisonbreak.com",
    rating: 8.3,
  },
  {
    title: "Roman Empire",
    id: "6",
    trailer: "https://www.youtube.com/embed/aOOKeYQs4w0",
    img: "/image/Roman Empire.jpg",
    description:
      "Chronicles some of the most famous leaders of the Roman Civilization.",
    posterURL: "www.romanempire.com",
    rating: 6.9,
  },
  {
    title: "The Expanse",
    id: "7",
    trailer: "https://www.youtube.com/embed/caLji74IIp4",
    img: "https://media.wiley.com/product_data/coverImage300/37/14051822/1405182237.jpg",
    description:
      "In the 24th century, a disparate band of antiheroes unravel a vast conspiracy that threatens the Solar System's fragile state of cold war.",
    posterURL: "www.theexpanse.com",
    rating: 8.5,
  },
  {
    title: "The Walking Dead",
    id: "8",
    trailer: "https://www.youtube.com/embed/R1v0uFms68U",
    img: "https://fr.web.img5.acsta.net/pictures/15/02/24/16/34/449118.jpg",
    description:
      "Police officer (Rick) wakes up from a coma in which he was in for several months as a result of being shot while on the job, to find that the world has been ravaged by the zombies and he is the only survivor. An army of the zombies, events escalate.",
    posterURL: "www.thewalkingdead.com",
    rating: 8.2,
  },
  {
    title: "Voltron",
    id: "9",
    trailer: "https://www.youtube.com/embed/NXW1waqRCb0",
    img: "https://i.pinimg.com/originals/85/e7/93/85e793a86b68663b8d363394e842bb21.jpg",
    description:
      "Five teenagers become the last line of defense for the galaxy in an intergalactic battle against the evil alien force led by King Zarkon.",
    posterURL: "www.voltron.com",
    rating: 8.1,
  },
];

function App() {
  const [list, setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate, setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie) {
    if (movie.title && movie.img && movie.description && movie.posterURL) {
      setList([...list, movie]);
    }
  }

  function filter(key, rate) {
    setKeyword(key);
    setRate(rate);
    setFiltredList(
      list.filter((element) => {
        return (
          element.title.toLowerCase().includes(key.toLowerCase()) &&
          element.rating >= rate
        );
      })
    );
  }

  useEffect(() => {
    filter(keyword, rate);
  }, [list]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Filtring filter={filter} /> <MovieList list={filtredList} />{" "}
              <AddMovie adding={adding} />{" "}
            </>
          }
        />
        <Route path="/:id" element={<Description list={list} />} />
      </Routes>
    </div>
  );
}

export default App;
