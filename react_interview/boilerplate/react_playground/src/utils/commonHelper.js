const fetchData = async (uri) => {
  try {
    const response = await fetch(uri);
    const data = await response.json();
    return { data };
  } catch (error) {
    return { error };
  }
};

export { fetchData };
