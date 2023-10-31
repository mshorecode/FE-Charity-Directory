const endpoint = 'https://localhost:7287';

const createSubscription = (charityId, userId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/${charityId}/subscription/${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(charityId, userId),
  })
    .then(async (res) => {
      let data;
      if (res.ok) {
        data = await res.json();
        resolve(data);
      }
    })
    .catch(reject);
});

const getAllSubscriptions = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/subscription`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteSubscription = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/subscriptionsbyID/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const getsubscriptionsByCharity = (charityId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/subscriptionsByCharity/${charityId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => resolve(response.json()))
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  deleteSubscription,
  getAllSubscriptions,
  createSubscription,
  getsubscriptionsByCharity,
};
