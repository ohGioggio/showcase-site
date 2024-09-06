import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import cards from '../data/projects'
import { useState } from "react";


const Card = ({ event }) => {
    return (
      <div className="w-[300px] h-[400px] bg-white rounded-lg overflow-hidden shadow-lg m-2">
        <div className="grid w-[300px] h-[150px] rounded-t-lg">
          <Image
            className="absolute w-[300px] h-[150px] object-cover rounded-t-lg"
            src={event.image}
            alt={event.title}
            width={200}
            height={150}
            quality={25}
          />
        </div>
        <div className="p-3">
          <div className="text-lg font-medium text-gray-900 mt-2">{event.title}</div>
          <div className="mt-4 text-gray-600">{event.description}</div>
          <div className="mt-4 flex justify-between items-center"></div>
          <hr className="border-t-2 border-gray-200 mb-4" />
          <div className="mt-4 flex justify-between items-center mx-4">
            <div className="flex items-center mx-2">
              <div className="flex-1 flex items-center justify-center flex-col">
                <CalendarIcon className="h-8 w-8 text-gray-400 mb-2"/>
                <span className="text-gray-600 text-xs">{event.date}</span>
              </div>
            </div>
            <div className="flex items-center mx-2">
              <div className="flex-1 flex items-center justify-center flex-col">
                <ClockIcon className="h-8 w-8 text-gray-400  mb-2"/>
                <span className="text-gray-600 text-xs">{event.time}</span>
              </div>
            </div>
            <div className="flex items-center mx-2">
              <div className="flex-1 flex items-center justify-center flex-col">
                <MapPinIcon className="h-8 w-8 text-gray-400 mb-2"/>
                <span className="text-gray-600 text-xs">{event.location}</span>
              </div>
            </div>
          </div>
          <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4">
            <Link href={event.link} className="flex items-center justify-center">
              <span>Go to project</span>
              <ChevronRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </button>
        </div>
      </div>
    );
  };


  const PostCard = ({ event }) => {
    return (
      <div className="h-fit max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl bg-white rounded-lg overflow-hidden shadow-lg m-2 mx-auto">
        <div className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-4 m-3">
          <Image src={event.image} alt={event.title} className="w-80 md:w-70 h-24 sm:h-64 rounded-lg object-cover" width={320} height={240}/>
          <div className="flex flex-col md:pr-2 w-80 md:w-80 sm:h-64 justify-around">
            <div className="flex items-center space-x-2 mb-2 mt-2 md:mt-0">
              <span className="psx-2 py-1 text-gray-600 text-xs">{event.date}</span>
              <span className="bg-gray-200 rounded-full px-2 py-1 text-gray-600 text-xs">{event.tag}</span>
            </div>
            <h2 className="px-2 text-black font-semibold mb-1 text-left">{event.title}</h2>
            <p className="px-2 text-gray-600 text-sm mb-4 text-left max-h-16">{event.description}</p>
            <div className="flex flex-col h-full justify-end mb-3">
              <hr className="border-gray-300 my-3"/>
              <div className="flex justify-between items-center">
                <div className="mt-1 flex items-center mx-6">
                  <div className="flex-1 flex items-center justify-center flex-col">
                    <CalendarIcon className="h-7 w-7 text-gray-400 mb-1"/>
                    <span className="text-gray-600 text-xs">{event.date}</span>
                  </div>
                </div>
                <div className="flex items-center mx-6">
                  <div className="flex-1 flex items-center justify-center flex-col">
                    <ClockIcon className="h-7 w-7 text-gray-400 mb-1"/>
                    <span className="text-gray-600 text-xs">{event.time}</span>
                  </div>
                </div>
                <div className="flex items-center mx-6">
                  <div className="flex-1 flex items-center justify-center flex-col">
                    <MapPinIcon className="h-7 w-7 text-gray-400 mb-1"/>
                    <span className="text-gray-600 text-xs">{event.location}</span>
                  </div>
                </div>
              </div>
              <Link href={`/posts/${event.id}`} className="mt-4 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-16">
                Discover
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    );
  };
  

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState("All");

  const uniqueTags = [...new Set(cards.flatMap((card) => card.tag))];

  const filteredCards = selectedTag === "All"
    ? cards
    : cards.filter((card) => card.tag.includes(selectedTag));

  const [showAllCards, setShowAllCards] = useState(false);
  const firstThreeCards = cards.slice(0, 3);

    return (
      <>
        <main>
          <div id='projects' className="relative px-6 lg:px-8 bg-gray-100 rounded-3xl">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-50">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Our Projects
                </h1>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                  Projects Description
                </p>
                <div className="my-4 flex justify-end">
                  <label className="mr-2 font-bold p-1">Tag:</label>
                    <select
                      className="border border-gray-200 bg-white rounded-md p-1"
                      value={selectedTag}
                      onChange={(e) => setSelectedTag(e.target.value)}
                  >
                  <option value="All">All</option>
                  {uniqueTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                  ))}
                  </select>
                </div>
                <hr className="border-gray-300" />
                <div className="mx-auto flex justify-center my-6">
                  <div className="container flex flex-wrap justify-end">
                    {filteredCards.map((card) => (
                      <PostCard key={card.title} event={card} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    )
}
