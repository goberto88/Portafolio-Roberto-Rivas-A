import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 2000);

    return () => clearInterval(interval);
  }, [selectedIndex]);

  const next = () => {
    const nextIndex = selectedIndex < images.length - 1 ? selectedIndex + 1 : 0;
    setSelectedIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  useEffect(() => {
    if (selectedIndex === images.length - 1) {
      setSelectedIndex(0);
      setSelectedImage(images[0]);
    }
  }, [selectedIndex, images]);

  return (
    <div className='flex h-full flex-col justify-center items-center mb-8'>
      <div className='w-72 sm:w-80 md:w-1/2 lg:w-3/6 h-48 sm:h-36 md:h-64 transition duration-2000 overflow-hidden relative'>
        <div className='flex flex-col justify-between h-full'>
          {selectedImage && <img src={selectedImage} alt="ImgProject" className=' w-full h-full object-contain ' />}
        </div>
      </div>
      <div className="flex space-x-3 justify-center items-center mt-4">
            {images.map((image, index) => (
              image && <span key={index} className={`w-2 h-2 ${index === selectedIndex ? 'bg-oscuro' : 'bg-gray-400'} rounded-full cursor-pointer border-b shadow-lg`}></span>
            ))}
          </div>
    </div>
  );
};

export default Carousel;
