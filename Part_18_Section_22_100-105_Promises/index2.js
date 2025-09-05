//fetch call inside Promise

//utils. Could be located in a separate file and use as a utility function - modular approach
const getData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error));
  });
};

export default { getData };
