export const categoriesToQuery = (categories) => {
  const handleArray = [];
  categories.map(item => {
    handleArray.push(item.value);
    return handleArray;
  });
  const categoriesQuery = handleArray.join('+');
  return categoriesQuery;
};