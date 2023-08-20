import BaseLayout from '@/app/layout/BaseLayout'
import Navigation from '@/components/server/Navigation'
import ImageInformation from '@/components/ImageInformation'
import ImageViewer from '@/components/server/ImageViewer'

/**
 * Renders a page with an image viewer and image information based on the given params.
 * @param {Object} params - The params object containing the slug array.
 * @param {string[]} params.slug - The slug used to generate the image URL. [0: Directory name, 1: File name]
 * @returns {ReactElement} The rendered page component.
 */
export default function page({ params }: { params: { slug: string[] } }) {
  return (
    <BaseLayout>
      <Navigation />
      <ImageViewer params={params} />
      <ImageInformation params={params} />
    </BaseLayout>
  )
}
