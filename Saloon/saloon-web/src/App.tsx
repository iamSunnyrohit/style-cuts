import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { LandingHero } from './components/LandingHero';
import { Features } from './components/Features';
import { ServiceCard } from './components/ServiceCard';
import { StylistCard } from './components/StylistCard';
import { ServiceCategoryTabs } from './components/ServiceCategoryTabs';
import { Checkout } from './components/Checkout';
import type { Service, Stylist, ServiceCategory } from './types';
import { environment } from './enviroment';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedStylist, setSelectedStylist] = useState<Stylist | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all');
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [filteredStylists, setFilteredStylists] = useState<Stylist[]>([]);

  useEffect(()=>{
    setServices();
    setStylists();
  }, []);

  function setServices() {
    fetch(`${environment.API_URL}/services/all`).then(res=>res.json()).then(res=>{
      setFilteredServices(res);
    });
  }

  function setStylists() {
    fetch(`${environment.API_URL}/stylists/all`).then(res=>res.json()).then(res=>{
      setFilteredStylists(res);
    });
  }

  function getServices() {
    return selectedCategory === 'all' ? filteredServices : filteredServices.filter(service => service.category === selectedCategory);
  }

  function getStylists() {
    return selectedService ? filteredStylists.filter(stylist => stylist.services.includes(selectedService.category)) : filteredStylists
  }

  return (
    <Router>
      <ToastContainer />
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <LandingHero />
                <Features />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <section id="services" className="mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Our Services</h2>
                    <ServiceCategoryTabs
                      selectedCategory={selectedCategory}
                      onSelectCategory={setSelectedCategory}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {getServices().map((service) => (
                        <ServiceCard
                          key={service.id}
                          service={service}
                          onSelect={setSelectedService}
                        />
                      ))}
                    </div>
                  </section>

                  <section id="stylists" className="mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Our Professionals</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {getStylists().map((stylist) => (
                        <StylistCard
                          key={stylist.id}
                          stylist={stylist}
                          onSelect={setSelectedStylist}
                        />
                      ))}
                    </div>
                  </section>
                </div>
              </>
            } />

            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        {(selectedService || selectedStylist) && (
          <section id="selection" className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 backdrop-blur-lg bg-white/90">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div>
                {selectedService && (
                  <p className="text-gray-600">
                    Selected service: <span className="font-semibold text-primary-600">{selectedService.name}</span>
                  </p>
                )}
                {selectedStylist && (
                  <p className="text-gray-600">
                    Selected stylist: <span className="font-semibold text-primary-600">{selectedStylist.name}</span>
                  </p>
                )}
              </div>
              <button
                onClick={() => {
                  window.location.href = `/checkout?selectedService=${selectedService?.id}&selectedStylist=${selectedStylist?.id}`;
                }}
                className={`px-6 py-2 rounded-lg ${
                  selectedService && selectedStylist
                    ? 'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!selectedService || !selectedStylist}
              >
                Continue Booking
              </button>
            </div>
          </section>
        )}
      </div>
    </Router>
  );
}

export default App;