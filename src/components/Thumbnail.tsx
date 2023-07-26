import { getEagleData } from '@/utils/baseApiUtils'
import { ItemThumbnailResponse } from '@/models/itemThumbnailResponseInterfaces'
import { ItemListData } from '@/models/itemListResponse'

async function getThumbnail(thumbnailId: string): Promise<ItemThumbnailResponse> {
    const endpoint = "/api/item/thumbnail";
    return await getEagleData<ItemThumbnailResponse>(endpoint, ["id=" + thumbnailId]);
}

export default async function Thumbnail({ item }: { item: ItemListData }) {
    const imageUrl = "http://192.168.2.114:8000/images/" + item.id + ".info/" + item.name + '.' + item.ext;

    return (
      <li>
        <img className="responsive" src={imageUrl} alt="Placeholder image" />
        <p>Text for image</p>
      </li>
    );
}
