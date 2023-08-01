import { getEagleData } from '@/utils/baseApiUtils'
import { ItemThumbnailResponse } from '@/models/itemThumbnailResponseInterfaces'
import { ItemListData } from '@/models/itemListResponse'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/thumbnails.module.scss'

//
// async function getThumbnail(thumbnailId: string): Promise<ItemThumbnailResponse> {
//     const endpoint = "/api/item/thumbnail";
//     return await getEagleData<ItemThumbnailResponse>(endpoint, ["id=" + thumbnailId]);
// }

export default async function Thumbnail({ item }: { item: ItemListData }) {
  const imageUrl = process.env.NEXT_PUBLIC_MEDIA_ENDPOINT + "/images/" + item.id + ".info/" + item.name + '.' + item.ext;
  console.log(imageUrl)

  // const styles: React.CSSProperties = {
  //   objectFit: "contain",
  //   position: "relative",
  //   margin: "auto",
  // }
  //
  // const liStyles: React.CSSProperties = {
  //   maxWidth: "115px",
  //   overflowWrap: "break-word",
  //   textAlign: "center",
  // }

  return (
      <li className={styles.liLayout}>
        <Link href={'/dashboard/' + item.id + "/" + item.name}>
          <Image className={styles.thumbnail} src={imageUrl} width={115} height={173} alt="Placeholder image" />
        </Link>
        <p>{item.name}</p>
      </li>
    );
}