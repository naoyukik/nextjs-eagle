'use client'

import { getEagleData } from '@/utils/baseApiUtils'
import { Item, ItemInfoResponse } from '@/models/itemInfoResponse'
import { useAtomValue, useSetAtom } from 'jotai'
import { selectedImageIDAtom } from '@/components/Jotais'
import { useEffect, useState } from 'react'
import styles from '../styles/navigation.module.scss'

/**
 * Retrieves the thumbnail for a given thumbnailId.
 *
 * @param thumbnailId - The ID of the thumbnail to retrieve.
 * @return A Promise that resolves with the thumbnail data.
 */
async function getItemInfo(thumbnailId: string): Promise<ItemInfoResponse> {
  const endpoint = '/api/item/info'
  return await getEagleData<ItemInfoResponse>(endpoint, ['id=' + thumbnailId])
}

export interface ImageInformationType {
  params?: { slug: string[] }
}

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then((r) => console.log(r))
}

/**
 * Displays information about an image based on the provided parameters.
 *
 * @param {Object} options - The options for fetching image information.
 * @param {Object} options.params - The parameters for fetching image information.
 * @param {string[]} options.params.slug - The slug of the image. [0: Directory name and Object ID, 1: File name]
 *
 * @returns {Promise<Object>} - A promise that resolves to an HTML element representing the image information.
 */
const ImageInformation = ({ params }: ImageInformationType) => {
  const [itemInfoData, setItemInfoData] = useState<{} | Item>({})
  const setSelectedImageID = useSetAtom(selectedImageIDAtom)

  if (typeof params !== 'undefined' && params.slug[0] !== '') {
    setSelectedImageID(params.slug[0])
  }

  const selectedImageID = useAtomValue(selectedImageIDAtom)
  console.log(`ImageInformation.tsx: selectedImageID: ${selectedImageID}`)
  console.log(`ImageInformation.tsx: itemInfoData: ${itemInfoData}`)

  useEffect(() => {
    if (selectedImageID === null) return
    getItemInfo(selectedImageID).then((infoItem: ItemInfoResponse) => {
      infoItem.data && setItemInfoData(infoItem.data)
    })
  }, [selectedImageID])

  if (Object.keys(itemInfoData).length === 0 || selectedImageID === null) {
    return (
      <aside className={styles.sticky}>
        <p>This text explains the image that's currently selected.</p>
      </aside>
    )
  }
  const items = itemInfoData as Item

  return (
    <aside className={styles.sticky}>
      <ul>
        <li>{items.name}</li>
        <li>{items.tags.map((t) => t + ' ')}</li>
        <li>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{items.annotation}</pre>
          <button onClick={() => copyToClipboard(items.annotation)}>Copy</button>
        </li>
      </ul>
    </aside>
  )
}

export default ImageInformation
