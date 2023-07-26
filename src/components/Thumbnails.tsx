import Thumbnail from './Thumbnail'
import { getEagleData } from '@/utils/baseApiUtils'
import { ItemThumbnailResponse } from '@/models/itemThumbnailResponseInterfaces'
import { ItemListData, ItemListResponse } from '@/models/itemListResponse'

/**
 * Asynchronously fetches a list of eagle items.
 *
 * @param {string[]=} [queryParams=['limit=10', 'orderBy=CREATEDATE']]  Optional query parameters
 * @return {Promise<Object>} Returns promise object resolved with fetched data.
 */
async function getEagleItemList(
  queryParams: string[] | undefined = ["limit=100 ", "orderBy=CREATEDATE"],
): Promise<ItemListResponse> {
  const endpoint = "/api/item/list";
  return await getEagleData<ItemListResponse>(endpoint, queryParams);
}

export default async function Thumbnails() {
  const eagleItemList: ItemListResponse = await getEagleItemList();
  const items: ItemListData[] = eagleItemList.data;

  console.log(items)
  return (
    <main>
      <ul className="responsive-images">
        {items.map((item) => {
          return <Thumbnail item={item} />;
        })}
      </ul>
    </main>
  );
}
