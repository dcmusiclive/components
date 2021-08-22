import origin from './apiOrigin';
import queryString from 'query-string';

const endpoint = {
  image: get => `${origin}/image?${queryString.stringify(get)}`,
};

export const api = {endpoint, origin, version};
