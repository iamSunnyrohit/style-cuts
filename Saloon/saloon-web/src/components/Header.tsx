import { Scissors } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-full">
              <Scissors className="h-8 w-8 text-primary-600" />
            </div>
            <h1 className="text-2xl font-bold">StyleCuts</h1>
          </div>
          <nav className="flex items-center space-x-6 justify-between">
            <a href="#services" className="text-primary-100 hover:text-white transition-colors">Services</a>
            <a href="#stylists" className="text-primary-100 hover:text-white transition-colors">Stylists</a>
            <a href="/checkout" className="bg-white text-primary-600 px-4 py-2 rounded-md hover:bg-primary-50 transition-colors">
              Book Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}