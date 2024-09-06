// import { Link } from 'react-router-dom';
// import './footer.module.css';
import Link from 'next/link'

const footerSections = [
  {
    title: 'Updates',
    links: [
      { text: 'Coming Soon...', href: '#' },
      { text: 'Coming Soon...', href: '#' },
      { text: 'Coming Soon...', href: '#' },
    ],
  },
  {
    title: 'Team',
    links: [
      { text: 'Sviluppatore Web', href: 'mailto:stragio.gio@gmail.com' },
      { text: 'Coming Soon...', href: '#' },
      { text: 'Coming Soon...', href: '#' },
    ],
  },
  {
    title: 'Social',
    links: [
      { text: 'Coming Soon...', href: '#' },
      { text: 'Coming Soon...', href: '#' },
      { text: 'Coming Soon...', href: '#' },
      { text: 'Coming Soon...', href: '#' },
    ],
  },
];

function FooterSection({ title, links }) {
  return (
    <div className="text-xs text-center text-gray-600 mb-4">
      <div className="font-bold text-base mb-2">{title}</div>
      <ul className="list-none space-y-2">
        {links.map((link) => (
          <li key={link.text}>
            <a href={link.href} className="text-gray-500 hover:text-gray-3s00 transition-colors duration-200">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Info() {
  return (
    <>
      <div className="bg-gray-100 py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4">
            {footerSections.map((section) => (
              <FooterSection key={section.title} title={section.title} links={section.links} />
            ))}
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center justify-between pt-4 text-gray-600 text-xs lg:flex-row lg:justify-between">
          <div className="sm:flex-grow text-center sm:text-left">
            &copy; 2024 -.<br/>C. F. P.IVA -
          </div>
          <div className="flex-none mt-4 lg:mt-0 text-center sm:text-right">
            <Link href="/terms" className="px-2 border-r border-gray-400">Terms and Conditions</Link>
            <Link href="/policy" className="px-2 border-r border-gray-400">Privacy Policy</Link>
            <button className="px-2" onClick={() => window.location.href = 'mailto:'}>
              PEC: -
            </button>
          </div>
        </div>

      </div>
    </>
  )
}