const moment = require('moment');

module.exports = (value) => {
  const dateObject = moment(value);
  return `${dateObject.utc().format('MMMM D, YYYY')}`;
};
