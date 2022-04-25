function cat() {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    });
  var pic = data[0].url;
  console.log(pic);
}
