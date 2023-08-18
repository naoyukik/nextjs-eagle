import { getEagleData } from '@/utils/baseApiUtils'
import { ItemInfoResponse } from '@/models/itemInfoResponse'
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

/**
 * Displays information about an image based on the provided parameters.
 *
 * @param {Object} options - The options for fetching image information.
 * @param {Object} options.params - The parameters for fetching image information.
 * @param {string[]} options.params.slug - The slug of the image. [0: Directory name and Object ID, 1: File name]
 *
 * @returns {Promise<Object>} - A promise that resolves to an HTML element representing the image information.
 */
export default async function ImageInformation({ params }: { params?: { slug: string[] } }) {
  if (typeof params === 'undefined') {
    // console.log('ImageInformation.tsx: params is undefined')
    return (
      <aside className={styles.sticky}>
        <p>This text explains the image that's currently selected.</p>
      </aside>
    )
  }
  const itemInfoData: ItemInfoResponse = await getItemInfo(params.slug[0])
  if (typeof itemInfoData === 'undefined') {
    // console.log('ImageInformation.tsx: itemInfoData is undefined')
    return (
      <aside className={styles.sticky}>
        <p>This text explains the image that's currently selected.</p>
      </aside>
    )
  }
  const items = itemInfoData.data

  return (
    <aside className={styles.sticky}>
      <ul>
        <li>{items.name}</li>
        <li>{items.tags.map((t) => t + ' ')}</li>
        <li>{items.annotation}</li>
      </ul>
    </aside>
  )
}
