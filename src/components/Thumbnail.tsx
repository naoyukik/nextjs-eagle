import { ItemListData } from "@/models/itemListResponse";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "../styles/thumbnails.module.scss";

export default async function Thumbnail({ item, setSelectedImage }) {
  const imageUrl =
    process.env.NEXT_PUBLIC_MEDIA_ENDPOINT + "/images/" + item.id + ".info/" + item.name + "." + item.ext;
  console.log(setSelectedImage);

  return (
    <li className={styles.liLayout}>
      <Link href={"/dashboard/" + item.id + "/" + item.name}>
        <Image
          className={styles.thumbnail}
          src={imageUrl}
          width={115}
          height={173}
          alt="Placeholder image"
          onMouseOver={() => setSelectedImage(item.id)}
        />
      </Link>
      <p>{item.name}</p>
    </li>
  );
}
