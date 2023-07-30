"use client"

import Navigation from '@/components/Navigation';
import ImageInformation from '@/components/ImageInformation';
import Thumbnails from '@/components/Thumbnails';
import BaseLayout from '@/app/layout/BaseLayout';
import { ItemListData, ItemListResponse } from '@/models/itemListResponse'
import { getEagleData } from '@/utils/baseApiUtils'
import { useEffect, useState } from 'react'

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

export default function Dashboard() {
  const [data, setData] = useState<ItemListData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getEagleItemList();
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <BaseLayout>
      <Navigation />
      <Thumbnails eagleItemList={data} /> {/* Thumbnails component now receives data as props */}
      <ImageInformation />
    </BaseLayout>
  );
}
