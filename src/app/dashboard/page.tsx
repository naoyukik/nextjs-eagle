import Navigation from "@/components/Navigation";
import ImageInformation from "@/components/ImageInformation";
import Thumbnails from "@/components/Thumbnails";
import BaseLayout from "@/app/layout/BaseLayout";
import React from "react";

export default async function Dashboard(): Promise<React.JSX.Element> {
  return (
    <BaseLayout>
      <Navigation />
      <Thumbnails /> {/* Thumbnails component now receives data as props */}
      <ImageInformation />
    </BaseLayout>
  );
}
