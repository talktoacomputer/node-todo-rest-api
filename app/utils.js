const mongoErrorHandler = (error) => {
  console.error(error);
  return error;
};

const mongoResponseHandler = (response) => {
  // console.log("** RESPONSE **");
  // console.log(response);
  return response;
};

/**
 *
 * @param {{action, message}} log -- `action`: specifies which among the CRUD operations was performed on the DB.
 *  - `message`: appears beside the action, describing what exactly was performed
 *  - e.g.: `{'action': 'create', 'message': 'Added a new task ['Buy eggs']'}` logs __CREATE: Added a new task ['Buy eggs']__
 */
const logDbAction = ({ action, message }) => {
  console.log(`${action.toUpperCase()}: ${message}`);
};

const UTILS = {
  mongoResponseHandler,
  mongoErrorHandler,
  logDbAction,
};

module.exports = UTILS;
