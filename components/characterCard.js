import React, { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

export default function CharacterCard({ character, episodes }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="rounded-3xl overflow-clip mx-auto hover:-translate-y-2 transition-all duration-300"
        onClick={handleCardClick}
        data-testid="character-card"
      >
        <Image
          src={character.image}
          width={290}
          height={290}
          className="rounded-3xl"
        />
        <div className="flex flex-col items-center justify-center mt-4">
          <h3 className="text-xl font-bold" data-testid="character-name">
            {character.name}
          </h3>
          <p className="text-sm text-gray-500" data-testid="character-species">
            {character.species}
          </p>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-8 modal-content"
            onClick={(e) => e.stopPropagation()}
            data-testid="modal"
          >
            <div className="flex flex-col items-center">
              <Image
                src={character.image}
                width={400}
                height={400}
                className="rounded-3xl mb-4"
              />
              <h2 className="text-2xl font-bold" data-testid="modal-name">
                {character.name}
              </h2>
              <p className="font-bold mt-4">Species:</p>
              <p data-testid="modal-species">{character.species}</p>
              <p className="font-bold mt-4">Origin:</p>
              <p data-testid="modal-origin">{character.origin.name}</p>
              <p className="font-bold mt-4">Location:</p>
              <p data-testid="modal-location">{character.location.name}</p>
              <p className="font-bold mt-4">Episodes Featured:</p>
              <ul className="modal-scroll" data-testid="modal-episodes">
                {character.episode.map((episode) => (
                  <li key={episode.split("/").pop()}>
                    {episodes[episode.split("/").pop()]}
                  </li>
                ))}
              </ul>
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                onClick={closeModal}
                data-testid="modal-close-btn"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
CharacterCard.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    origin: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    episode: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      air_date: PropTypes.string.isRequired,
      episode: PropTypes.string.isRequired,
      characters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      url: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
