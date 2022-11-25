const Warn = <P, C>(prop: P, className: C) => {
  console.warn(`You haven't specified ${prop} in the ${className} class`);
};

const Error = <P>(prop: P) => {
  console.error(
    `You need to provide a ${prop} in the class property to be able to use this method`
  );
};

export { Warn, Error };
