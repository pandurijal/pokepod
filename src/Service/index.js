const BASE_URL = 'https://pokeapi.co/api/v2';

export const pokeListService = (limit, offset) => {
  const url = `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`;
  const get = fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then(res => res.json());
  return get;
};

export const pokeDetailService = pokeName => {
  const url = `${BASE_URL}/pokemon/${pokeName}`;
  const get = fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then(res => res.json());
  return get;
};
