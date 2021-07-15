function carry(fn, ...args) {
  const len = args.length;
  return len >= fn.length
    ? fn(...args)
    : (..._args) => fn(...args, ..._args);
}