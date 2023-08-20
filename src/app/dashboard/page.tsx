import Navigation from '@/components/server/Navigation'
import React from 'react'
import DashboardLayout from '@/app/layout/DashboardLayout'
import ImageInformation from '@/components/ImageInformation'
import InfiniteThumbnails from '@/components/client/InfiniteThumbnails'

// export default async function Dashboard(): Promise<React.JSX.Element> {
//   const [selectedImage, setSelectedImage]: [null, (value: ((prevState: null) => null) | null) => void] = useState(null);
//   return (
//     <BaseLayout>
//       <Navigation />
//       <Thumbnails setSelectedImage={setSelectedImage} /> {/* Thumbnails component now receives data as props */}
//       <ImageInformation image={selectedImage} />
//     </BaseLayout>
//   );
// }

export interface DashboardHomeProps {
  params?: object
  searchParams: { folder?: string }
}

const DashboardHome = async (request: DashboardHomeProps) => {
  // const [selectedImage, setSelectedImage] = useState(null);
  // console.log(selectedImage);

  return (
    <DashboardLayout>
      <Navigation />
      <InfiniteThumbnails searchParams={request.searchParams} />
      <ImageInformation />
    </DashboardLayout>
  )
}

export default DashboardHome
