import fetchMock from "jest-fetch-mock";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getAllCharacters } from "../lib/api";

// Mock the fetch function
fetchMock.enableMocks();

// Create a new instance of Axios mock adapter
const axiosMock = new MockAdapter(axios);

describe("API Testing", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    axiosMock.reset();
  });

  test("should fetch list of all characters", async () => {
    const characters = [
      { id: 1, name: "Rick Sanchez" },
      { id: 2, name: "Morty Smith" },
    ];

    fetchMock.mockResponseOnce(JSON.stringify({ results: characters }));

    const result = await getAllCharacters();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API_URL}/character`
    );
    expect(result).toEqual(characters);
  });

  // test('should fetch list of all episodes', async () => {
  //   const episodes = [
  //     { id: 1, name: 'Episode 1' },
  //     { id: 2, name: 'Episode 2' },
  //     { id: 3, name: 'Episode 3' }
  //   ];

  //   axiosMock.onGet(`${process.env.NEXT_PUBLIC_API_URL}/episode/?page=1`).reply(200, {
  //     results: episodes.slice(0, 2),
  //     info: { next: 'page2' }
  //   });
  //   axiosMock.onGet(`${process.env.NEXT_PUBLIC_API_URL}/episode/?page=2`).reply(200, {
  //     results: episodes.slice(2),
  //     info: { next: null }
  //   });

  //   const result = await getAllEpisodes();

  //   expect(axiosMock.history.get.length).toBe(2);
  //   expect(axiosMock.history.get[0].url).toBe(`${process.env.NEXT_PUBLIC_API_URL}/episode/?page=1`);
  //   expect(axiosMock.history.get[1].url).toBe(`${process.env.NEXT_PUBLIC_API_URL}/episode/?page=2`);
  //   expect(result).toEqual(episodes);
  // });
});
