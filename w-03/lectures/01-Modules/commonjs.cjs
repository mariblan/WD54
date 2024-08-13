const hello = () => {
  console.log('Hello');
};

const add = (num1, num2) => {
  return num1 + num2;
};

const substract = (num1, num2) => {
  return num1 - num2;
};

define(function () {
  return {
    add: function () {
      return num1 + num2;
    },
    substact: function (num1, num2) {
      return num1 - num2;
    },
  };
});

module.exports = { hello, add, substract };
