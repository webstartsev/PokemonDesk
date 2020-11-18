import config from '../config';

export const enum Endpoint {
  getPokemons = 'getPokemons',
}

export type QueryParams = {
  [x: string]: any;
};

const getUrlWithParamsConfig = (endpointConfig: Endpoint, query: QueryParams = {}) => {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query,
  };
};

export default getUrlWithParamsConfig;
