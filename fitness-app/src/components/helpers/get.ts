const get = async (path: string) => {
    const response = await fetch("http://127.0.0.1:5000/" + path);
    const result = await response.json();
    return result;
  };

export default get;