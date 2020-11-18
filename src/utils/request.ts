import Url from 'url';
import getUrlWithParamsConfig, { Endpoint, QueryParams } from './getUrlWithParamsConfig';

const req = (endpoint: Endpoint, query: QueryParams) => {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));

  return fetch(uri).then((res) => res.json());
};

export default req;
