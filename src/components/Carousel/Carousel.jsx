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
    <div className='flex flex-col justify-center items-center mb-8'>
      {selectedImage && <img src={selectedImage} alt="ImgProject" className=' w-3/4  md:2/4 items-center  h-auto transition duration-2000 border-b rounded-lg shadow-lg' />}
      <div className="flex mt-4 space-x-3">
        {images.map((image, index) => (
          image && <span key={index} className={`w-2 h-2 ${index === selectedIndex ? 'bg-oscuro' : 'bg-gray-400'} rounded-full cursor-pointer border-b shadow-lg`}></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
