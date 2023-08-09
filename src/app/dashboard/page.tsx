import Navigation from "@/components/server/Navigation";
import Thumbnails from "@/components/server/Thumbnails";
import React from "react";
import DashboardLayout from "@/app/layout/DashboardLayout";
import Dashboard from "@/components/client/Dashboard";
import ImageInformation from "@/components/ImageInformation";

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

const DashboardHome = async (folder) => {
  // const [selectedImage, setSelectedImage] = useState(null);
  // console.log(selectedImage);
  console.log(folder);
  return (
    <DashboardLayout>
      <Navigation />
      <Dashboard></Dashboard>
      <Thumbnails />
      <ImageInformation params={undefined} />
    </DashboardLayout>
  );
};

export default DashboardHome;
