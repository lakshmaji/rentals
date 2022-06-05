const HOST = "http://localhost:6002";

export interface SymbolMap {
  [key: symbol]: Symbol;
}

export const addToken = () => ({ [Symbol.for("includeAuth")]: Symbol() });

const api = async <T>(
  method: "POST" | "GET",
  url: string,
  body?: T | SymbolMap,
  queryParams: { [key: string]: string } = {}
) => {
  const queryString = new URLSearchParams(queryParams);
  let requestUrl = HOST;
  requestUrl += Object.keys(queryParams).length ? `${url}?${queryString}` : url;
  let accessToken;

  if (body && (body as SymbolMap).hasOwnProperty(Symbol.for("includeAuth"))) {
    // fetch and append token
    accessToken = "";
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
    options.body = JSON.stringify(body);
  }

  const response = await fetch(requestUrl, options);

  return response.json();
};

export default api;
