import Thumbnail from "./Thumbnail";

/**
 * Asynchronously fetches and returns eagle data from the defined url.
 * Throws an error if the environment variable EAGLE_TOKEN or EAGLE_ENDPOINT is not defined or empty.
 * Extra query parameters can be added to the url request if required.
 *
 * @param {string} urlPath - The path to the eagle data on the server.
 * @param {string[]} [addQueryParams] - Additional query parameters to be added to the url request.
 * @returns {Promise<object>} - An object of the parsed JSON response from the fetch request.
 * @throws {Error} - If EAGLE_TOKEN or EAGLE_ENDPOINT is undefined or empty, or if the data fetch fails.
 * @async
 */
async function getEagleData(urlPath: string, addQueryParams?: string[]): Promise<object> {
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

    return JSON.parse(await res.json());
}

/**
 * Asynchronously fetches a list of eagle items.
 *
 * @param {string[]=} [queryParams=['limit=10', 'orderBy=CREATEDATE']]  Optional query parameters
 * @return {Promise<Object>} Returns promise object resolved with fetched data.
 */
async function getEagleItemList(
    queryParams: string[] | undefined = ["limit=10", "orderBy=CREATEDATE"],
): Promise<object> {
    const endpoint = "/api/item/list";
    return await getEagleData(endpoint, queryParams);
}

async function getThumbnails(thumbnailId: string) {
    const endpoint = "/api/item/thumbnail";
    return await getEagleData(endpoint, ['id=' + thumbnailId]);
}

export default async function Thumbnails() {
    const eagleItemList = await getEagleItemList();

    // console.log(data)
    return (
        <main>
            <ul className="responsive-images">
                <Thumbnail thumbnailId="aaa"/>
                <li>
                    <img className="responsive" src="http://placehold.jp/512x768.png" alt="Placeholder image" />
                    <p>Text for image</p>
                </li>
                <li>
                    <img className="responsive" src="http://placehold.jp/512x768.png" alt="Placeholder image" />
                    <p>Text for image</p>
                </li>
                <li>
                    <img className="responsive" src="http://placehold.jp/512x768.png" alt="Placeholder image" />
                    <p>Text for image</p>
                </li>
                <li>
                    <img className="responsive" src="http://placehold.jp/512x768.png" alt="Placeholder image" />
                    <p>Text for image</p>
                </li>
                <li>
                    <img className="responsive" src="http://placehold.jp/512x768.png" alt="Placeholder image" />
                    <p>Text for image</p>
                </li>
                <li>
                    <img className="responsive" src="http://placehold.jp/512x768.png" alt="Placeholder image" />
                    <p>Text for image</p>
                </li>
                <li>
                    <img className="responsive" src="http://placehold.jp/512x768.png" alt="Placeholder image" />
                    <p>Text for image</p>
                </li>
                <li>
                    <img className="responsive" src="http://placehold.jp/512x768.png" alt="Placeholder image" />
                    <p>Text for image</p>
                </li>
                <li>
                    <img className="responsive" src="http://placehold.jp/512x768.png" alt="Placeholder image" />
                    <p>Text for image</p>
                </li>
            </ul>
        </main>
    );
}
