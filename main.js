const token = ~~[Math.random() * 12345678];

const pictures = ['1.jpg', '2.jpg', '3.jpg'];

function login(username) {
  console.log('prosessing data..');
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (username != 'dixxyy') failed('nyari apa hayo');
      success({ token });
    }, 500);
  });
}

function getUser(token) {
  console.log('prosessing token..');
  return new Promise((success, failed) => {
    if (!token) failed('sorry no token, cannot access');
    setTimeout(() => {
      success({ apiKey: 'xkey123' });
    }, 500);
  });
}

function getPictures(apiKey) {
  console.log('prosessing picture..');
  setTimeout(() => {
    if (apiKey) return { pic: pictures };
  }, 1500);
}

const user = login('dixxyy');
user.then(function (response) {
  const { token } = response;
  getUser(token)
    .then(function (response) {
      const apiKey = response;
      console.log(apiKey);
    })
    .catch((err) => console.log(err));
});
