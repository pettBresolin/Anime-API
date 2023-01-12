import { animemock } from "mock/animes";
//const defaultUrl = "animemock";

export const api = {
  createAnime: async (anime) => {
    const response = await fetch(animemock + "/create", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(anime),
    });
    const newAnime = await response.json();
    return newAnime;
  },

  getAllAnimes: async () => {
    const response = await fetch(animemock + "/");
    const allAnimes = await response.json();

    return allAnimes;
  },

  deleteAnime: async (animeId) => {
    const response = await fetch(animemock + "/delete/" + animeId, {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    const animeDeleted = await response.json();
    return animeDeleted;
  },

  updateAnime: async (anime) => {
    const response = await fetch(animemock + "/update", {
      method: "PUT",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(anime),
    });

    const animeUpdated = await response.json();
    return animeUpdated;
  },
};
