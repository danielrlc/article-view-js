fetch(
  'https://cors-anywhere.herokuapp.com/https://lettera.api.ksfmedia.fi/v3/article/a6282b95-e620-4040-87d1-731fed85a7d6',
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
