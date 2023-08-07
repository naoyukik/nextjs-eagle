"use client";

import Navigation from "@/components/Navigation";
import ImageInformation from "@/components/ImageInformation";
import Thumbnails from "@/components/Thumbnails";
import BaseLayout from "@/app/layout/BaseLayout";
import React, { useState } from "react";

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

const Dashboard = async () => {
  const [selectedImage, setSelectedImage] = useState(null);
  console.log(selectedImage);
  return (
    <BaseLayout>
      <Thumbnails setSelectedImage={setSelectedImage} />
    </BaseLayout>
  );
};

export default Dashboard;
