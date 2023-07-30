import BaseLayout from '@/app/layout/BaseLayout'
import Navigation from '@/components/Navigation'
import ImageInformation from '@/components/ImageInformation'
import ImageViewer from '@/components/ImageViewer'

export default function page({ params }: { params: { slug: string[] } }) {

  return (
    <BaseLayout>
      <Navigation />
      <ImageViewer params={params} />
      <ImageInformation />
    </BaseLayout>
  );
}