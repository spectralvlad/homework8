const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

function loggingDecorator(func) {
  return function (...args) {
    console.log(`${func.name}, args: ${args.join(", ")}`);
    return func.apply(this, args);
  };
}

const loggedGreet = loggingDecorator(greet);

loggedGreet("Alice"); // Має вивести у консоль greet, args: Alice
loggedGreet("Bob"); // Має вивести у консоль greet, args: Bob
