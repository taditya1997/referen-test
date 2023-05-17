import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

export default function Modal({ character, episodes, closeModal }) {
  Modal.propTypes = {
    character: PropTypes.object.isRequired,
    episodes: PropTypes.array.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50"
      onClick={closeModal}
      data-testid="modal"
    >
      <div
        className="bg-white rounded-lg p-8 modal-content"
        onClick={(e) => e.stopPropagation()}
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
          <div className="modal-scroll">
            <ul data-testid="modal-episodes">
              {character.episode.map((episode) => (
                <li key={episode.split("/").pop()}>
                  {episodes[episode.split("/").pop()]}
                </li>
              ))}
            </ul>
          </div>
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
  );
}
