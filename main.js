const token = ~~[Math.random() * 12345678];

const pictures = ['1.jpg', '2.jpg', '3.jpg'];

function login(username, callback) {
  console.log('prosessing data..');
  setTimeout(() => {
    callback({ token, username });
  }, 500);
}

function getUser(token, callback) {
  console.log('prosessing token..');
  setTimeout(() => {
    if (token) callback({ apiKey: 'xkey123' });
  }, 500);
}

function getPictures(apiKey) {
  if (apiKey) return pictures;
}

login('dixxyy', function (response) {
  const { token } = response;
  getUser(token, function (response) {
    const { apiKey } = response;
    console.log(apiKey);
  });
});
