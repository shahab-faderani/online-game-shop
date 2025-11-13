import { Genre } from "./genreService";
import { Platform } from "./platformService";
import APIClient from "./api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: String;
}

export default new APIClient<Game>("/games");
