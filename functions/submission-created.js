/* https://docs.netlify.com/functions/trigger-on-events */

const fetch = require('node-fetch');

const { EMAIL_TOKEN } = process.env;
exports.handler = async (event) => {
  const { email } = JSON.parse(event.body).payload;
  return fetch('https://api.buttondown.email/v1/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${EMAIL_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })
    .then((response) => response.json())
    .then((data) => ({ statusCode: 200, body: String(data) }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};
