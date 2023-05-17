import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Modal from "../components/Modal";

describe("Modal", () => {
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

  test("renders modal with character details", () => {
    const closeModal = jest.fn();
    const { getByTestId, getByText } = render(
      <Modal
        character={character}
        episodes={episodes}
        closeModal={closeModal}
      />
    );

    expect(getByTestId("modal")).toBeInTheDocument();
    expect(getByTestId("modal-name")).toHaveTextContent("Rick Sanchez");
    expect(getByTestId("modal-species")).toHaveTextContent("Human");
    expect(getByTestId("modal-origin")).toHaveTextContent("Earth");
    expect(getByTestId("modal-location")).toHaveTextContent("Dimension C-137");
    expect(getByTestId("modal-episodes")).toBeInTheDocument();
    expect(getByText("Episode 1: Pilot")).toBeInTheDocument();
    expect(getByText("Episode 2: Lawnmower Dog")).toBeInTheDocument();
    expect(getByText("Episode 3: Anatomy Park")).toBeInTheDocument();
  });
});
