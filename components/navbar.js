import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import Image from 'next/image'

const navigation = [
    { name: 'Mission', href: '/#mission', current: false },
    { name: 'Skills', href: '/#skills', current: false },
    { name: 'Projects', href: '/#projects', current: false },
    { name: 'Materials', href: '/#materials', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

import { useState } from 'react'
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="bg-white">
      <Disclosure>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                {/* <Image className="h-8 w-8" src="/next.svg" width={32} height={32} alt="Logo" /> */}
              </Link>
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-xl font-bold font-mono text-gray-800">Name</h1>
              </Link>
            </div>
            <div className="hidden sm:block sm:mx-auto flex justify-center">
              <div className="flex space-x-4 my-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-white' : 'text-gray-800 hover:bg-gray-50 hover:text-gray-600',
                      'px-3 py-2 rounded-md text-md font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden sm:grid flex items-center">
              <Link href="#contacts" className="flex-shrink-0" legacyBehavior>
                <a className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Contact us
                </a>
              </Link>
            </div>
            <div className="mr-2 flex md:hidden">
              <Disclosure.Button
                className="bg-transparent inline-flex items-center justify-center w-10 h-10 my-3 p-2 rounded-md text-gray-800 hover:text-gray-600 hover:bg-gray-100 focus:outline-none"
                onClick={toggleNavbar}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </Disclosure.Button>
            </div>
          </div>
          <hr className="bg-gray-400"/>
        </div>

        <Disclosure.Panel className="mt-2 mx-4 md:hidden rounded-md" style={{backgroundColor: "#f3f4f6"}}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:bg-white">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:bg-gray-100 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  )
}
