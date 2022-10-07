import {axiosService} from "./axios.service";

const pokemonService = {
  getFirst: () => axiosService.get(''),
  getNext: (elements, page) => axiosService.get(`?offset=${elements * page}&limit=${elements}`),
  getById: (id) => axiosService.get(`${id}`)
}
export {pokemonService}