import config from '../config';

export const enum Endpoint {
  getPokemons = 'getPokemons',
  getPokemon = 'getPokemon',
}

export type QueryParams = {
  [x: string]: any;
};

const getUrlWithParamsConfig = (endpointConfig: Endpoint, query: QueryParams = {}) => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query: {},
  };

  const copyQuery = { ...query };

  url.pathname = Object.keys(copyQuery).reduce((acc, val) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, copyQuery[val]);
      delete copyQuery[val];
      return result;
    }
    return acc;
  }, url.pathname);

  url.query = copyQuery;

  return url;
};

export default getUrlWithParamsConfig;
