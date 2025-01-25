const post = async (path: string, data: object) => {
    const response = await fetch("http://127.0.0.1:5000/" + path, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(data)
    });
    const result = await response.json()
    return result;
};

export default post;