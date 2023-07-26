/**
 * Asynchronously fetches and returns eagle data from the defined url.
 * Throws an error if the environment variable EAGLE_TOKEN or EAGLE_ENDPOINT is not defined or empty.
 * Extra query parameters can be added to the url request if required.
 *
 * @param {string} urlPath - The path to the eagle data on the server.
 * @param {string[]} [addQueryParams] - Additional query parameters to be added to the url request.
 * @returns {Promise<T>} - An object of the parsed JSON response from the fetch request.
 * @throws {Error} - If EAGLE_TOKEN or EAGLE_ENDPOINT is undefined or empty, or if the data fetch fails.
 * @async
 */
export async function getEagleData<T>(urlPath: string, addQueryParams?: string[]): Promise<T> {
  if (typeof process.env.EAGLE_TOKEN === "undefined" && process.env.EAGLE_TOKEN !== "") {
    throw new Error("Empty EAGLE_TOKEN");
  }

  let queryParams = ["token=" + process.env.EAGLE_TOKEN];

  if (typeof addQueryParams === "object") {
    queryParams.push(...addQueryParams);
  }
  const queryString = queryParams.join("&");
  const query = new URLSearchParams(queryString);
  if (typeof process.env.EAGLE_ENDPOINT === "undefined" && process.env.EAGLE_ENDPOINT !== "") {
    throw new Error("Empty EAGLE_ENDPOINT");
  }
  const res = await fetch(process.env.EAGLE_ENDPOINT.concat(urlPath, "?", query.toString()));

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
