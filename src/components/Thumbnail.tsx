import { ItemListData } from "@/models/itemListResponse";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "../styles/thumbnails.module.scss";

export default async function Thumbnail({ item }: { item: ItemListData }) {
  const imageUrl =
    process.env.NEXT_PUBLIC_MEDIA_ENDPOINT + "/images/" + item.id + ".info/" + item.name + "." + item.ext;
  console.log(imageUrl);

  return (
    <li className={styles.liLayout}>
      <Link href={"/dashboard/" + item.id + "/" + item.name}>
        <Image className={styles.thumbnail} src={imageUrl} width={115} height={173} alt="Placeholder image" />
      </Link>
      <p>{item.name}</p>
    </li>
  );
}
