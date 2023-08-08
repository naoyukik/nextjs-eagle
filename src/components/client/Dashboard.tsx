"use client"
import React, { useState } from 'react'
import Thumbnails from '@/components/server/Thumbnails'

const Dashboard = ({children}: { children: React.ReactNode }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {children}
    </>
  );
}

export default Dashboard;