import { getEagleData } from '@/utils/baseApiUtils'
import { LibraryInfoResponse } from '@/models/libraryInfoResponse'
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
    name: 'すべての画像',
    url: '/dashboard',
  },
]

const Navigation = async () => {
  const items = await getEagleLibraryInfo().then((response) => {
    return response.data
  })

  return (
    <aside className={styles.sticky}>
      <h2>ライブラリ</h2>
      <ul className={styles.folders}>
        {initialFixedFolders.map((item) => (
          <li key={item.id} className={styles.folders__list}>
            <Link href={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <h2>スマートフォルダ</h2>
      <ul className={styles.folders}>
        {items.smartFolders.map((item) => (
          <li key={item.id} className={styles.folders__list}>
            <Link href={`/dashboard?folder=${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <h2>フォルダ</h2>
      <ul className={styles.folders}>
        {items.folders.map((item) => (
          <li key={item.id} className={styles.folders__list}>
            <Link href={`/dashboard?folder=${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Navigation
