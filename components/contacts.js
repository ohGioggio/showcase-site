

export default function Contacts() {
  return (
    <>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-36">
            <div id="contacts" className="bg-gray-100 md:py-16 p-8 rounded-lg">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold leading-tight text-gray-900">Contact us</h2>
                <p className="mt-2 text-lg leading-6 text-gray-600">
                  Contatcs Description
                </p>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <h3 className="text-xl font-medium leading-tight text-gray-900">Address</h3>
                    <div className="mt-4">
                      <p className="text-lg leading-6 text-gray-600">
                        Street -<br />
                        - Milan (MI)<br />
                        Italy
                      </p>
                    </div>
                  </div>
                  <div className="sm:col-span-1">
                    <h3 className="text-xl font-medium leading-tight text-gray-900">Contact</h3>
                    <div className="mt-4">
                      <p className="text-lg leading-6 text-gray-600">
                        Phone: - -<br />
                        Email: -
                      </p>
                      <button
                        className="mt-4 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => window.location.href = 'mailto:'}
                      >
                        Send us an email
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}