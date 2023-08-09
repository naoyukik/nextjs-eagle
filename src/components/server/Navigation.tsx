import { getEagleData } from '@/utils/baseApiUtils'
import { LibraryInfoResponse } from '@/models/libraryInfoResponse'

async function getEagleLibraryInfo(): Promise<LibraryInfoResponse> {
  const endpoint = '/api/library/info'
  return await getEagleData<LibraryInfoResponse>(endpoint)
}

const Navigation = () => {
  getEagleLibraryInfo().then((response) => {
    const items = response.data
  })

  return (
    <aside>
      <h2>ライブラリー</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </aside>
  )
}

export default Navigation