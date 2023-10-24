import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getCharities = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/charity.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleCharity = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/charity/${id}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createCharity = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/charity.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateCharity = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/players/${payload.id}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteSingleCharity = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/players/${id}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getCharities,
  getSingleCharity,
  createCharity,
  updateCharity,
  deleteSingleCharity,
};
