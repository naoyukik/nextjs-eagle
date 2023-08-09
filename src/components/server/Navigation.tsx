import { getEagleData } from "@/utils/baseApiUtils";
import { LibraryInfoResponse } from "@/models/libraryInfoResponse";
import Link from "next/link";

async function getEagleLibraryInfo(): Promise<LibraryInfoResponse> {
  const endpoint = "/api/library/info";
  return await getEagleData<LibraryInfoResponse>(endpoint);
}

const Navigation = async () => {
  const items = await getEagleLibraryInfo().then((response) => {
    return response.data;
  });

  console.log(items);

  return (
    <aside>
      <h2>スマートフォルダ</h2>
      <ul>
        {items.smartFolders.map((item) => (
          <li key={item.id}>
            <Link href={`/dashboard/?folder=${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Navigation;
