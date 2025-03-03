import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black text-white z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Moonlight Logo"
              width={40}
              height={40}
              className="w-auto h-10"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/anasayfa" className="hover:text-blue-500 transition-colors">
              Anasayfa
            </Link>
            <Link href="/hakkimizda" className="hover:text-blue-500 transition-colors">
              Hakkımızda
            </Link>
            <Link href="/hizmetlerimiz" className="hover:text-blue-500 transition-colors">
              Hizmetlerimiz
            </Link>
            <Link href="/portfolyo" className="hover:text-blue-500 transition-colors">
              Portföy
            </Link>
            <Link href="/iletisim" className="hover:text-blue-500 transition-colors">
              İletişim
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/iletisim" 
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Bize Ulaşın
            </Link>
            <button className="flex items-center space-x-1">
              <span>EN</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 