'use client'

import { getEagleData } from '@/utils/baseApiUtils'
import { ItemListData, ItemListResponse } from '@/models/itemListResponse'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Thumbnail from '@/components/Thumbnail'
import { DashboardHomeProps } from '@/app/dashboard/page'
import { usePathname } from 'next/navigation'

const initialQueryParams = ['limit=10', 'orderBy=CREATEDATE']

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

const InfiniteThumbnails = (props: Pick<DashboardHomeProps, 'searchParams'>) => {
  // fetchItems is the state variable, setFetchItems is the function to update the state variable
  const [fetchItems, setFetchItems] = useState<ItemListData[]>([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(true)
  const [prevPath, setPrevPath] = useState('')
  const [prevFolder, setPrevFolder] = useState<string | null>(null)
  const [isFetch, setIsFetch] = useState(true)
  const pathName = usePathname()
  const observer = useRef<IntersectionObserver | null>(null)
  const queryParams = [...initialQueryParams]

  console.log(`pathName: ${pathName}`)

  const lastItemRef = useCallback(
    (node) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading],
  )

  const folder: string | null = props.searchParams.folder || null
  folder && queryParams.push(`folders=${folder}`)

  useEffect(() => {
    // Reset the fetched data when transitioning pages.
    if (prevPath !== pathName || prevFolder !== folder) {
      setFetchItems([])
      setPage(0)
      setPrevPath(pathName)
      setIsFetch(true)
      setPrevFolder(folder)
    }

    console.log(`isFetch: ${isFetch}`)
    if (!isFetch) return

    setLoading(true)
    queryParams.push(`offset=${page}`)
    getEagleItemList(queryParams).then((newItems: ItemListResponse) => {
      setFetchItems((prevItems) => [...prevItems, ...newItems.data])
      setLoading(false)
      newItems.data.length === 0 && !observer.current?.disconnect() && setIsFetch(false)
    })
  }, [page, pathName, folder])

  return (
    <main>
      <ul className="responsive-images">
        {fetchItems.map((item: ItemListData, index: number) =>
          index === fetchItems.length - 1 ? (
            <Thumbnail ref={lastItemRef} key={index} item={item} />
          ) : (
            <Thumbnail key={index} item={item} />
          ),
        )}
      </ul>
      {loading && <p>Loading...</p>}
    </main>
  )
}

export default InfiniteThumbnails
