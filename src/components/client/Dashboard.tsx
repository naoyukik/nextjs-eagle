"use client"
import React, { useEffect, useState } from 'react'
import Thumbnails from '@/components/server/Thumbnails'

const Dashboard = ({children}: { children: React.ReactNode }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const countUp = () => {
    setSelectedImage((prev) => prev + 1);
  };

  useEffect(() => {
    console.log(selectedImage)
  }, [selectedImage]);

  return (
    <>
      <button onClick={countUp}>+</button>
      {children}
    </>
  );
}

export default Dashboard;