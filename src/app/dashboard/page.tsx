import Navigation from '@/components/Navigation';
import ImageInformation from '@/components/ImageInformation';
import Thumbnails from '@/components/Thumbnails';
import BaseLayout from '@/app/layout/BaseLayout';

export default function dashboard() {
  return (
    <BaseLayout>
      <Navigation />
      <Thumbnails />
      <ImageInformation />
    </BaseLayout>
  );
}
