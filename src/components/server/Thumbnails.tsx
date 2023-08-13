import { getEagleData } from '@/utils/baseApiUtils'
import { ItemListData, ItemListResponse } from '@/models/itemListResponse'
import React from 'react'
import Thumbnail from '@/components/Thumbnail'
import { DashboardHomeProps } from '@/app/dashboard/page'

const initialQueryParams = ['limit=6', 'orderBy=CREATEDATE']

/**
 * Asynchronously fetches a list of eagle items.
 *
 * @param {string[]=} [queryParams=['limit=10', 'orderBy=CREATEDATE']]  Optional query parameters
 * @return {Promise<Object>} Returns promise object resolved with fetched data.
 */
async function getEagleItemList(queryParams: string[]): Promise<ItemListResponse> {
  const endpoint = '/api/item/list'
  return await getEagleData<ItemListResponse>(endpoint, queryParams)
}

interface ThumbnailsProps {
  eagleItemList: ItemListData[]
}

const Thumbnails = async (props: Pick<DashboardHomeProps, 'searchParams'>) => {
  // const response = cache(async () => {
  //   return await getEagleItemList();
  // });
  console.log(initialQueryParams)
  const queryParams = [...initialQueryParams]
  console.log(queryParams)
  console.log(props)
  if (props.searchParams && typeof props.searchParams.folder !== 'undefined')
    queryParams.push(`folders=${props.searchParams.folder}`)
  console.log(queryParams)

  const response = await getEagleItemList(queryParams)

  return (
    <main>
      <ul className="responsive-images">
        {response.data.map((item: ItemListData, index: number) => {
          return <Thumbnail key={index} item={item} />
        })}
      </ul>
    </main>
  )
}

export default Thumbnails
