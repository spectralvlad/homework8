function loggingDecorator(func) {
  return function (...args) {
    console.log(`${func.name}, args: ${args.join(", ")}`);
    return func.apply(this, args);
  };
}

const someFn = (param1, param2, ...params) => {
  // Що-небудь робимо тут
};

const loggedFn = loggingDecorator(someFn);

loggedFn(1, 2, 3); // Має вивести у консоль someFn, args: 1, 2, 3
loggedFn("test"); // Має вивести у консоль someFn, args: test
