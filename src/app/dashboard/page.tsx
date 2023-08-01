import Navigation from "@/components/Navigation";
import ImageInformation from "@/components/ImageInformation";
import Thumbnails from "@/components/Thumbnails";
import BaseLayout from "@/app/layout/BaseLayout";
import { ItemListData, ItemListResponse } from "@/models/itemListResponse";
import { getEagleData } from "@/utils/baseApiUtils";
import React from "react";
//
// /**
//  * Asynchronously fetches a list of eagle items.
//  *
//  * @param {string[]=} [queryParams=['limit=10', 'orderBy=CREATEDATE']]  Optional query parameters
//  * @return {Promise<Object>} Returns promise object resolved with fetched data.
//  */
// async function getEagleItemList(
//   queryParams: string[] | undefined = ["limit=6", "orderBy=CREATEDATE"],
// ): Promise<ItemListResponse> {
//   const endpoint = "/api/item/list";
//   return await getEagleData<ItemListResponse>(endpoint, queryParams);
// }

export default async function Dashboard(): Promise<React.JSX.Element> {
  return (
    <BaseLayout>
      <Navigation />
      <Thumbnails /> {/* Thumbnails component now receives data as props */}
      <ImageInformation />
    </BaseLayout>
  );
}
