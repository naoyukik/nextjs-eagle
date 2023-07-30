"use client"

import Thumbnail from './Thumbnail'
import { getEagleData } from '@/utils/baseApiUtils'
import { ItemThumbnailResponse } from '@/models/itemThumbnailResponseInterfaces'
import { ItemListData, ItemListResponse } from '@/models/itemListResponse'
import { useEffect, useState } from 'react'

/**
 * Asynchronously fetches a list of eagle items.
 *
 * @param {string[]=} [queryParams=['limit=10', 'orderBy=CREATEDATE']]  Optional query parameters
 * @return {Promise<Object>} Returns promise object resolved with fetched data.
 */
// async function getEagleItemList(
//   queryParams: string[] | undefined = ["limit=100 ", "orderBy=CREATEDATE"],
// ): Promise<ItemListResponse> {
//   const endpoint = "/api/item/list";
//   return await getEagleData<ItemListResponse>(endpoint, queryParams);
// }

interface ThumbnailsProps {
  eagleItemList: ItemListData[];
}

export default async function Thumbnails({ eagleItemList }: ThumbnailsProps) {

  // const [eagleItemList, setEagleItemList] = useState<ItemListData[]>([])
  // //
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getEagleItemList();
  //     console.log(data)
  //     // console.log(data.data)
  //     setEagleItemList(data.data);
  //   }
  //   fetchData();
  // }, []);
  //
  // if (!eagleItemList) {
  //   return null; // or some loading state
  // }

  // const items: ItemListData[] = eagleItemList.data;

  console.log(eagleItemList)

  return (
    <main>
      <ul className="responsive-images">
        {eagleItemList.map((item) => {
          return <Thumbnail item={item} />;
        })}
      </ul>
    </main>
  );
}
