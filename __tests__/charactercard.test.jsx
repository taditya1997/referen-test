import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CharacterCard from "../components/CharacterCard";

describe("CharacterCard", () => {
  const character = {
    name: "Rick Sanchez",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    species: "Human",
    origin: { name: "Earth" },
    location: { name: "Dimension C-137" },
    episode: ["episode1", "episode2", "episode3"],
  };

  const episodes = {
    episode1: "Episode 1: Pilot",
    episode2: "Episode 2: Lawnmower Dog",
    episode3: "Episode 3: Anatomy Park",
  };

  test("renders character card correctly", () => {
    const { getByTestId } = render(
      <CharacterCard character={character} episodes={episodes} />
    );
    const characterCard = getByTestId("character-card");
    const characterName = getByTestId("character-name");
    const characterSpecies = getByTestId("character-species");

    expect(characterCard).toBeInTheDocument();
    expect(characterName).toHaveTextContent("Rick Sanchez");
    expect(characterSpecies).toHaveTextContent("Human");
  });

  test("opens modal on card click", () => {
    const { getByTestId } = render(
      <CharacterCard character={character} episodes={episodes} />
    );
    const characterCard = getByTestId("character-card");

    fireEvent.click(characterCard);

    const modal = getByTestId("modal");
    const modalName = getByTestId("modal-name");
    const modalSpecies = getByTestId("modal-species");
    const modalOrigin = getByTestId("modal-origin");
    const modalLocation = getByTestId("modal-location");
    const modalEpisodes = getByTestId("modal-episodes");
    const modalCloseBtn = getByTestId("modal-close-btn");

    expect(modal).toBeInTheDocument();
    expect(modalName).toHaveTextContent("Rick Sanchez");
    expect(modalSpecies).toHaveTextContent("Human");
    expect(modalOrigin).toHaveTextContent("Earth");
    expect(modalLocation).toHaveTextContent("Dimension C-137");
    expect(modalEpisodes).toBeInTheDocument();
    expect(modalEpisodes.children.length).toBe(3); // Assuming there are 3 episodes
    expect(modalCloseBtn).toBeInTheDocument();
  });

  test("closes modal on close button click", () => {
    const { getByTestId, queryByTestId } = render(
      <CharacterCard character={character} episodes={episodes} />
    );
    const characterCard = getByTestId("character-card");

    fireEvent.click(characterCard);

    const modalCloseBtn = getByTestId("modal-close-btn");

    fireEvent.click(modalCloseBtn);

    const modal = queryByTestId("modal");

    expect(modal).not.toBeInTheDocument();
  });
});
