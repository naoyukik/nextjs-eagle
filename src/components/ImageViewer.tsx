import Thumbnail from '@/components/Thumbnail'
import Image from 'next/image'
import React from 'react'

export default function ImageViewer({ params }: { params: { slug: string[] } }) {
  const imageUrl = process.env.NEXT_PUBLIC_MEDIA_ENDPOINT + "/images/" + params.slug[0] + ".info/" + params.slug[1] + '.png';
  console.log(imageUrl)

  const styles: React.CSSProperties = {
    objectFit: "contain",
    position: "relative !important",
    margin: "auto",
  }
  return (
    <main>
      <div className="responsive-images">
        <Image src={imageUrl} width={512} height={768} style={styles} alt='title' />
      </div>
    </main>
  );
}

