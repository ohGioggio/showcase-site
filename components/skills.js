import { HomeModernIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image'
import { useState } from "react";

const cards = [
  {
    num: '1',
    title: 'Title 1',
    description: 'Description 1',
    image: '',
    images: [],
  },
  {
    num: '2',
    title: 'Title 2',
    description: 'Description 2',
    image: '',
    images: [],
  },
  {
    num: '3',
    title: 'Title 3',
    description: "Description 3",
    image: '/',
    images: ['/', '/', '/', '/'],
  }
];

const ImagePanel = ({ images, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex justify-end mb-2">
          <button onClick={onClose}>
            <XMarkIcon className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-2 gap-4">
          {images.map((image) => (
            <Image key={image}
            alt={image}
            src={image}
            width={200}
            height={200}
            quality={50}
            className="rounded-xl cursor-pointer shadow-lg sm:shadow-none sm:h-80 sm:w-64 h-40 w-28"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CardOri = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [clickedFeatureImages, setClickedFeatureImages] = useState([]);

  const togglePanel = (images) => {
    setClickedFeatureImages(images);
    setShowPanel(!showPanel);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-3xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-2 sm:px-6 sm:py-6">
        <div>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-y-16 lg:gap-x-8">
            {cards.map((feature) => (
              <div key={feature.title} className="border-t border-gray-300 pt-4 w-56">
                <div className="relative">
                  <Image
                    src={feature.image}
                    className="rounded-xl cursor-pointer shadow-lg sm:shadow-none h-72 w-56 mb-2"
                    alt={feature.image}
                    key={feature.num}
                    height={500}
                    width={500}
                    quality={50}
                  />
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-4 rounded-full"
                  onClick={() => togglePanel(feature.images)}>
                    <PlusIcon className="h-6 w-6 text-gray-600" />
                  </button>
                </div>
                
                <dt className="font-medium text-gray-900">{feature.title}</dt>
                <dd className="mt-2 text-sm text-gray-500 text-justify">{feature.description}</dd>
              </div>
            ))}
            {showPanel && <ImagePanel images={clickedFeatureImages} onClose={togglePanel} />}
          </dl>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, description, num }) => {
  return (
    <div className="card w-72 sm:w-56 md:w-64 lg:w-72 xl:w-80 mx-4 my-4 p-4 rounded-lg shadow-md">
      <div className="p-4 flex items-center">
        <div className="m-auto">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
            <HomeModernIcon className="h-6 w-6 text-gray-800" />
          </div>
        </div>
        <div className="w-0.5 h-10 bg-gray-400 mx-4"></div>
        <div className="flex-grow">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <div className="flex items-center mt-2">
            <p className="text-gray-700 text-sm">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default function Skills() {
    return (
      <>
        <main>
          <div id='skills' className="relative px-6 lg:px-8 py-32 sm:py-48 lg:py-50">
            <div className="mx-auto max-w-2xl pb-10">
              <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Our Skills
                </h1>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                  Skills Description
                </p>
              </div>
            </div>
            <div className="mx-auto flex justify-center">
              <CardOri />
            </div>
          </div>
        </main>
      </>
    )
  }