import { getEagleData } from '@/utils/baseApiUtils'
import { ItemListData, ItemListResponse } from '@/models/itemListResponse'
import React from 'react'
import Thumbnail from '@/components/Thumbnail'

/**
 * Asynchronously fetches a list of eagle items.
 *
 * @param {string[]=} [queryParams=['limit=10', 'orderBy=CREATEDATE']]  Optional query parameters
 * @return {Promise<Object>} Returns promise object resolved with fetched data.
 */
async function getEagleItemList(
  queryParams: string[] | undefined = ["limit=6", "orderBy=CREATEDATE"],
): Promise<ItemListResponse> {
  const endpoint = "/api/item/list";
  return await getEagleData<ItemListResponse>(endpoint, queryParams);
}

interface ThumbnailsProps {
  eagleItemList: ItemListData[];
}

const Thumbnails = async () => {
  // const response = cache(async () => {
  //   return await getEagleItemList();
  // });
  const response = await getEagleItemList();

  return (
    <main>
      <ul className="responsive-images">
        {response.data.map((item: ItemListData, index: number) => {
          return <Thumbnail key={index} item={item} />;
        })}
      </ul>
    </main>
  );
};

export default Thumbnails;
