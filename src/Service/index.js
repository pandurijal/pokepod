const BASE_URL = 'https://https://pokeapi.co/api/v2';

export const pokeListService = (query, limit, offset) => {
  const url = `${BASE_URL}/pokemon`;
  const get = fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then(res => res.json());
  return get;
};
