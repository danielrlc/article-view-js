fetch(
  'http://localhost:3001/',
)
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.warn('Something went wrong.', error);
  });
