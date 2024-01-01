const token = ~~[Math.random() * 12345678];

function login(username) {
  return { token, username };
}

const user = login('dixxyy');

console.log(user);
