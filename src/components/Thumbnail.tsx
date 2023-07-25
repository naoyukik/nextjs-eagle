async function getThumbnail(thumbnailId: string) {
  const endpoint = "/api/item/thumbnail";
  return await getEagleData(endpoint, ['id=' + thumbnailId]);
}

export default async function Thumbnail(thumbnailId: string){
    return (
      <li>
        <img className="responsive" src="http://placehold.jp/512x768.png" alt="Placeholder image" />
        <p>Text for image</p>
      </li>
    );
}