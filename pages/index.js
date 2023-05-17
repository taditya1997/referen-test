import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "../components/characterCard";
import Layout from "@/components/layout";
import Head from "next/head";
import PropTypes from "prop-types";
import { getAllEpisodes } from "@/lib/api";

const Home = () => {
  const api_url = process.env.NEXT_PUBLIC_API_URL;
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState(null);

  const fetchCharacters = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${api_url}/character/?page=${page}`);
      const newCharacters = response.data.results;
      setCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      // console.error("Error fetching characters:", error);
    } finally {
      setIsLoading(false);
    }
  };

  async function fetchAllEpisodes() {
    let obj = {};
    const result = await getAllEpisodes();
    // console.log(result, "result");
    result.map((episodes) => {
      obj[`${episodes.id}`] = episodes.name;
    });
    setEpisodes(obj);
  }

  // console.log(episodes, "episodes");

  useEffect(() => {
    fetchCharacters();
  }, []);

  useEffect(() => {
    fetchAllEpisodes();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        fetchCharacters();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [characters]);

  return (
    <Layout>
      <Head>
        <title>Rick and Morty</title>
      </Head>

      <div className="container mx-auto p-5">
        <div className="grid lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-10 justify-center">
          {characters.map((character, index) => (
            <CharacterCard
              character={character}
              key={index}
              currentCharacter={currentCharacter}
              setCurrentCharacter={setCurrentCharacter}
              episodes={episodes}
            />
          ))}
        </div>
        {isLoading && <p>Loading...</p>}
      </div>
    </Layout>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
  setCurrentCharacter: PropTypes.func.isRequired,
  episodes: PropTypes.object,
};

export default Home;
