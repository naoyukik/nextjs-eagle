import Thumbnail from "@/components/Thumbnail";
import Image from "next/image";
import React from "react";
import styles from "../styles/thumbnails.module.scss";

/**
 * A component for displaying an image using a given slug.
 *
 * @param {Object} params - The parameters for the component.
 * @param {string[]} params.slug - The slug used to generate the image URL. [0: Directory name, 1: File name]
 *
 * @return {React.Element} - The rendered component.
 */
const ImageViewer = ({ params }: { params: { slug: string[] } }) => {
  const imageUrl =
    process.env.NEXT_PUBLIC_MEDIA_ENDPOINT + "/images/" + params.slug[0] + ".info/" + params.slug[1] + ".png";

  return (
    <main>
      <div className="responsive-images">
        <Image src={imageUrl} width={512} height={768} className={styles.imageView} alt="title" />
      </div>
    </main>
  );
}

export default ImageViewer;