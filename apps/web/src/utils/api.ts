const HOST = "http://localhost:6002";

export interface SymbolMap {
  [key: symbol]: Symbol;
}

export const addToken = (token: string) => ({
  [Symbol.for("includeAuth")]: token,
});

const api = async <RT, T extends object>(
  method: "POST" | "GET",
  url: string,
  body?: T | SymbolMap,
  queryParams: { [key: string]: string } = {}
): Promise<RT> => {
  const queryString = new URLSearchParams(queryParams);
  let requestUrl = HOST;
  requestUrl += Object.keys(queryParams).length ? `${url}?${queryString}` : url;

  let accessToken;
  if (body && body.hasOwnProperty(Symbol.for("includeAuth"))) {
    accessToken = (body as SymbolMap)[Symbol.for("includeAuth")];
  }

  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  };

  if (body) {
    const keys = Object.keys(body);
    if(keys.length>0) {
      options.body = JSON.stringify(body);
    }
  }

  const response = await fetch(requestUrl, options);

  return response.json();
};

export default api;
