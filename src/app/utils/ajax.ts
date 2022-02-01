export const ajax = {
  GET: async (url: string): Promise<any> => {
    const req = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await req.json();
  },

  POST: async (url: string, params: object): Promise<any> => {
    const req = await fetch(url, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await req.json();
  },
};
