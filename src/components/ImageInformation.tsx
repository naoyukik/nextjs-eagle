import { getEagleData } from "@/utils/baseApiUtils";
import { ItemInfoResponse } from "@/models/itemInfoResponse";

/**
 * Retrieves the thumbnail for a given thumbnailId.
 *
 * @param thumbnailId - The ID of the thumbnail to retrieve.
 * @return A Promise that resolves with the thumbnail data.
 */
async function getItemInfo(thumbnailId: string): Promise<ItemInfoResponse> {
  const endpoint = "/api/item/info";
  return await getEagleData<ItemInfoResponse>(endpoint, ["id=" + thumbnailId]);
}

/**
 * Provides information about the currently selected image.
 *
 * @param params - The parameters for fetching image information.
 * @param params.slug - The slug(s) used to select the image. [0: Directory name and Object ID, 1: File name]
 * @return The component displaying the image information.
 */
export default async function ImageInformation({ params }: { params: { slug: string[] } }) {
  if (typeof params === "undefined") {
    return (
      <aside>
        <p>This text explains the image that's currently selected.</p>
      </aside>
    );
  }
  const itemInfoData: ItemInfoResponse = await getItemInfo(params.slug[0]);
  if (typeof itemInfoData === "undefined") {
    return (
      <aside>
        <p>This text explains the image that's currently selected.</p>
      </aside>
    );
  }
  const items = itemInfoData.data;

  return (
    <aside>
      <ul>
        <li>{items.name}</li>
        <li>{items.tags.map((t) => t + " ")}</li>
        <li>{items.annotation}</li>
      </ul>
    </aside>
  );
}
