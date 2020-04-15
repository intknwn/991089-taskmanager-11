const filterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `archive`
];

const generateFilters = () => {
  return filterNames.map((name) => {
    return {
      name,
      count: Math.floor(Math.random() * 10),
    };
  });
};

export {generateFilters};
