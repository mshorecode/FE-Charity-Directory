const endpoint = 'https://localhost:7287';

const getCharities = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/charity`, {
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
  fetch(`${endpoint}/charity/${id}`, {
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
  fetch(`${endpoint}/charity`, {
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
  fetch(`${endpoint}/charities/${payload.id}`, {
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
  fetch(`${endpoint}/charitiesbyID/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    // .then((response) => {
    //   if (!response.ok) {
    //     throw new Error('Response was not ok');
    //   }
    //   return response.text(); // Get the response as text
    // })
    // .then((text) => {
    //   if (text) {
    //     const data = JSON.parse(text); // Attempt to parse JSON
    //     console.warn(data);
    //   } else {
    //     console.warn('Response is empty');
    //   }
    // })
    .then((res) => res.json())
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
