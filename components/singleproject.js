import Link from 'next/link'
import Image from 'next/image'
import { CalendarIcon, ClockIcon, MapPinIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Footer from './footer'
import { useState } from "react";

function ImageSlider({ event }) {
  const [currentImage, setCurrentImage] = useState(0);

  const previousImage = () => {
    setCurrentImage((currentImage - 1 + event.images.length) % event.images.length);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % event.images.length);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-10 mt-12 md:mx-auto mx-4">
      {[0, 1, 2].map((index) => {
        return (
          <div className="mb-10 sm:mb-0" key={event.id + "-" + index}>
            <Image
              src={event.images[index]}
              className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
              alt={event.images[index]}
              key={event.id + "-" + index}
              height={500}
              width={500}
            />
          </div>
        );
      })}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
            onClick={previousImage}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
            onClick={nextImage}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Progetti( { event } ) {
    return (
      <>
        <main className="bg-slate-100">
          <div className="container mx-auto bg-slate-100">
            <div className="md:mx-auto mx-4">
              <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-gray-900 pt-14 sm:pt-20 mb-3">
                {event.title}
              </p>
              <div className="flex">
                <div className="flex items-center mr-5">
                  <ClockIcon className="text-xs h-6 text-gray-600 " />
                  <span className="font-general-regular ml-2 leading-none text-gray-600">
                    {event.postdate}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="bg-gray-200 rounded-full px-3 py-1 text-gray-600 text-regular">
                    {event.tag}
                  </span>
                </div>
              </div>
            </div>
            {/* <ImageSlider event={event}/> */}
            <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-10 mt-5 md:mx-auto mx-4">
              {event.images.map((image) => {
                return (
                  <div className="mb-10 sm:mb-0" key={event.id}>
                    <Image
                      src={image}
                      className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                      alt={image}
                      key={event.id}
                      height={500}
                      width={500}
                      quality={40}
                    />
                  </div>
                );
              })}
            </div>
            <div className="block sm:flex gap-0 sm:gap-10 mt-10 md:mx-auto mx-4">
              <div className="w-full sm:w-1/3 text-left">
                {/* Info */}
                <div className="mb-7 p-5 rounded-xl bg-white">
                  <p className="text-2xl font-semibold text-gray-900 mb-2">
                    Info
                  </p>
                  <ul className="leading-loose">
                  {Object.entries(event.info).map(([key, value]) => (
                          <li
                            className="text-gray-600"
                            key={event.id}
                          >
                            <span>{key.slice(0, 1).toUpperCase() + key.slice(1)}: {value}</span>
                          </li>
                    ))}
                  </ul>
                </div>

                {/* Description */}
                <div className="mb-7 p-5 rounded-xl bg-white">
                  <p className="text-2xl font-semibold text-gray-900 mb-2">
                    Description
                  </p>
                  <p className="text-gray-600">
                    {event.description}
                  </p>
                </div>

                {/* Materials */}
                <div className="mb-7 p-5 rounded-xl bg-white">
                  <p className="text-2xl font-semibold text-gray-900 mb-2">
                    Materials
                  </p>
                  <p className="text-gray-600">
                    {event.materials.join(
                      ', '
                    )}
                  </p>
                </div>
              </div>

              {/* Production */}
              <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0 p-5 rounded-xl bg-white">
                <p className="font-general-regular text-gray-900 text-2xl font-bold mb-7">
                  Production
                </p>
                {event.production.map((details) => {
                  return (
                    <p
                      key={details.id}
                      className="font-general-regular mb-5 text-lg text-gray-900"
                    >
                      {details.details}
                    </p>
                  );
                })}
              </div>
            </div>
            <h2 className="text-bold md:mx-auto mx-4">
              <Link href="/">← Back to home</Link>
            </h2>
          </div>
          <Footer/>
        </main>
      </>
    )
}
