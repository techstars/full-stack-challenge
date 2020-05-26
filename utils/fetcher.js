import fetch from 'isomorphic-unfetch';

export default function fetcher(...args) {
  return fetch(...args).then(res => res.json());
}