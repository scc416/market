const clientsHelperFunctionGenerator = (users) => {
  const addUser = (socketId) => {
    users.push(socketId);
  };

  const removeUser = (socketId) => {
    const index = users.indexOf(socketId);
    users.splice(index, 1);
  };

  return { addUser, removeUser };
};

module.exports = { clientsHelperFunctionGenerator };
