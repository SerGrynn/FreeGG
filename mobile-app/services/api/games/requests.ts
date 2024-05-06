import { api } from '../api'

export const getAllGames = async () => {
  return api.get('/games').then((response) => {
    return response.data
  })
}

export const getGameById = async (id: number) => {
  return api.get(`/game?id=${id}`).then((response) => {
    return response.data
  })
}

export const getGenre = async (genre: string) => {
  return api.get(`/games?category=${genre}`).then((response) => {
    return response.data
  })
}

export const getPlatform = async (platform: string) => {
  return api.get(`/games?platform=${platform}`).then((response) => {
    return response.data
  })
}
