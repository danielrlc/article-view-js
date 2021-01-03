fetch('http://localhost:3001/')
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  })
  .then(function (data) {
    console.log(data);
    var app = document.querySelector('#app');
    var title = document.createElement('h1');
    title.textContent = data.title;
    app.appendChild(title);
    data.body.map((element) => {
      if (element.html) {
        var p = document.createElement('p');
        p.innerHTML = element.html;
        app.appendChild(p);
      } else if (element.headline) {
        var h2 = document.createElement('h2');
        h2.textContent = element.headline;
        app.appendChild(h2);
      } else if (element.image) {
        var img = document.createElement('img');
        img.src = element.image.url;
        img.alt = element.image.caption;
        app.appendChild(img);
      } else if (element.box) {
        var h2 = document.createElement('h2');
        h2.textContent = element.box.headline;
        app.appendChild(h2);
        var h3 = document.createElement('h3');
        h3.textContent = element.box.title;
        app.appendChild(h3);
        element.box.content.map((contentItem) => {
          var p = document.createElement('p');
          p.innerHTML = contentItem;
          app.appendChild(p);
        });
      }
    });
  })
  .catch(function (error) {
    console.warn('Something went wrong.', error);
  });
