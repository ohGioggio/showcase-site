import { HomeModernIcon, CalendarIcon } from '@heroicons/react/24/solid';

const materials = [
    {
      title: 'Title 1',
      description: 'Description 1',
    },
    {
      title: 'Title 2',
      description: 'Description 2',
    },
    {
      title: 'Title 3',
      description: 'Description 3',
    },
  ];


const MaterialCard = ({ title, description }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-md">
      {title === 'Title 1' && (
        <div className="flex-shrink-0">
          <HomeModernIcon className="h-6 w-6 text-gray-400" />
        </div>
      )}
      {title === 'Title 2' && (
        <div className="flex-shrink-0">
          <CalendarIcon className="h-6 w-6 text-gray-400" />
        </div>
      )}
      {title === 'Title 3' && (
        <div className="flex-shrink-0">
          <HomeModernIcon className="h-6 w-6 text-gray-400" />
        </div>
      )}
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <p className="mt-2 text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default function Materials() {
    return (
      <>
        <main>
          <div id='materiali' className="relative px-6 lg:px-8 py-32 sm:py-48 lg:py-50">
            <div className="mx-auto max-w-2xl pb-10">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Materials</h2>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                  Materials Description
                </p>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {materials.map((material, index) => (
                  <MaterialCard key={index} title={material.title} description={material.description} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </>
    );
  };
  