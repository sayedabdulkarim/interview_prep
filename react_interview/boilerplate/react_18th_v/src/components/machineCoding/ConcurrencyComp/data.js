const generateProducts = () => {
  const prods = [];

  for (let i = 0; i < 20000; i++) {
    prods.push(`Product ${i + 1}`);
  }
  return prods;
};

export { generateProducts };
