import { BuildingOffice2Icon } from '@heroicons/react/24/solid';

export default function Info() {
  return (
    <>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-36">
            <div id='info' className="text-center">
              <div className="flex items-center justify-center">
                {/* <svg className="w-40 h-40 md:w-60 md:h-60" viewBox="0 0 595.28 841.89">
                  </svg> */}
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Company Name
              </h1>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Company Description
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#contacts"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Contact us
                </a>
                <a href="#projects" className="text-sm font-semibold leading-6 text-gray-900">
                  Projects <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}