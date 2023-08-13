'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from '../styles/thumbnails.module.scss'

export default function Thumbnail({ item }) {
  const [mouseOverImageId, setMouseOverImageId] = useState('')
  const saveMouseOverImageId = (id: string) => {
    setMouseOverImageId(id)
  }

  useEffect(() => {
    console.log(mouseOverImageId)
  }, [mouseOverImageId])

  const imageUrl = `${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}/images/${item.id}.info/${item.name}.${item.ext}`

  return (
    <li className={styles.liLayout}>
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
}
