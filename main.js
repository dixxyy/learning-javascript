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
  return new Promise((success, failed) => {
    if (!apiKey) failed('mana apiKey nya bjir');
    setTimeout(() => {
      success({ pic: pictures });
    }, 1500);
  });
}

async function UserDisplay() {
  try {
    const { token } = await login('dixxyy');
    const { apiKey } = await getUser(token);
    const { pic } = await getPictures(apiKey);

    console.log(`
    token anda adalah: ${token}
    apiKey anda adalah: ${apiKey}
    hasil request gambar sebagai berikut: ${pic}
    `);
  } catch (err) {
    console.log(err);
  }
}

UserDisplay();
