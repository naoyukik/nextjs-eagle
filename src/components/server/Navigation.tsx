import { getEagleData } from '@/utils/baseApiUtils'
import { Data, Folder, LibraryInfoResponse, SmartFolder } from '@/models/libraryInfoResponse'
import Link from 'next/link'
import styles from '../../styles/navigation.module.scss'
import crypto from 'crypto'

async function getEagleLibraryInfo(): Promise<LibraryInfoResponse> {
  const endpoint = '/api/library/info'
  return await getEagleData<LibraryInfoResponse>(endpoint)
}

interface FixedFolder {
  id: string
  name: string
  url: string
}

function getId(url: string): string {
  return crypto.createHash('MD5').update(url).digest('hex')
}

const initialFixedFolders: FixedFolder[] = [
  {
    id: getId('/dashboard'),
    name: 'all',
    url: '/dashboard',
  },
]

const Navigation = async () => {
  const items = await getEagleLibraryInfo().then((response) => {
    return response.data
  })

  const recursiveFolderBuilder = (folders: Folder[] | SmartFolder[]) => {
    return (
      <ul className={styles.folders}>
        {folders.map((folder: Folder | SmartFolder) => (
          <li key={folder.id}>
            <Link className={styles.folders__list} href={`/dashboard?folder=${folder.id}`}>
              {folder.name}
            </Link>
            {folder.children.length > 0 && recursiveFolderBuilder(folder.children)}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <aside className={styles.sticky}>
      <h2>Library</h2>
      <ul className={styles.folders}>
        {initialFixedFolders.map((item) => (
          <li key={item.id} className={styles.folders__list}>
            <Link href={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <h2 className={styles.title}>Smart folder</h2>
      {recursiveFolderBuilder(items.smartFolders)}
      <h2 className={styles.title}>Folder</h2>
      {recursiveFolderBuilder(items.folders)}
    </aside>
  )
}

export default Navigation
