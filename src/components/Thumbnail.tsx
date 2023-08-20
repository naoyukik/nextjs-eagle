'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from '../styles/thumbnails.module.scss'
import { ItemListData } from '@/models/itemListResponse'
import { useSetAtom } from 'jotai'
import { selectedImageIDAtom } from '@/components/Jotais'

interface ThumbnailsProps {
  item: ItemListData
  index: number
}

const Thumbnail = React.forwardRef(({ item, index }: ThumbnailsProps, ref) => {
  const [mouseOverImageId, setMouseOverImageId] = useState('')
  const setSelectedImageID = useSetAtom(selectedImageIDAtom)

  const saveMouseOverImageId = (id: string) => {
    setSelectedImageID(id)
  }

  useEffect(() => {
    console.log(mouseOverImageId)
  }, [mouseOverImageId])

  const imageUrl = `${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}/images/${item.id}.info/${item.name}.${item.ext}`
  return (
    <li ref={ref} key={index} className={styles.liLayout}>
      <Link href={'/dashboard/' + item.id + '/' + item.name}>
        <Image
          className={styles.thumbnail}
          src={imageUrl}
          width={115}
          height={173}
          alt="Placeholder image"
          onMouseOver={() => saveMouseOverImageId(item.id)}
        />
      </Link>
      <p>{item.name}</p>
    </li>
  )
})

export default Thumbnail
