/**
 *
 * @param {string} urlPath slash beginning path
 * @param addQueryParams
 */
async function getEagleData(urlPath: string, addQueryParams?: string[]) {
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
        throw new Error('Failed to fetch data')
    }

    return res.json();
}

async function getEagleItemList() {
    const endpoint = '/api/item/list'
    getEagleData('endpoint', )
}

async function getThumbnails() {}

export default async function Thumbnails() {
    const data = await getEagleData("/api/item/list", []);
    // console.log(data)
    return (
        <main>
            <ul className="responsive-images">
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
                <li>
                    <img className="responsive" src="http://placehold.jp/512x768.png" alt="Placeholder image" />
                    <p>Text for image</p>
                </li>
            </ul>
        </main>
    );
}
