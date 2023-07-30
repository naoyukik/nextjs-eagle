import { getEagleData } from '@/utils/baseApiUtils'
import { ItemThumbnailResponse } from '@/models/itemThumbnailResponseInterfaces'
import { ItemListData } from '@/models/itemListResponse'
import Link from 'next/link'
import Image from 'next/image'

async function getThumbnail(thumbnailId: string): Promise<ItemThumbnailResponse> {
    const endpoint = "/api/item/thumbnail";
    return await getEagleData<ItemThumbnailResponse>(endpoint, ["id=" + thumbnailId]);
}

export default async function Thumbnail({ item }: { item: ItemListData }) {
  const imageUrl = "http://192.168.2.212:8000/images/" + item.id + ".info/" + item.name + '.' + item.ext;
  console.log(imageUrl)

    return (
      <li>
        <Link href={'/dashboard/' + item.id + "/" + item.name}>
          <Image className="responsive" src={imageUrl} width={115} height={173} alt="Placeholder image" />
        </Link>
        <p>{item.name}</p>
      </li>
    );
}
