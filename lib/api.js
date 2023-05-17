import axios from "axios";

const api_url = process.env.NEXT_PUBLIC_API_URL;

async function fetchData(api) {
  const res = await fetch(api);
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json;
}

export const getAllCharacters = async () => {
  const data = await fetchData(`${api_url}/character`);
  return data.results;
};

// eslint-disable-line no-unused-vars
export async function getAllEpisodes() {
  let data = [];
  for (let i = 1; i <= 3; i++) {
    const response = await axios.get(`${api_url}/episode/?page=${i}`);
    const newEpisodes = response.data.results;
    data.push(...newEpisodes);
  }
  return data;
}
