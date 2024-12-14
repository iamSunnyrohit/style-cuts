import { validate } from 'email-validator';
import { environment } from '../enviroment';
import type { Service, Service as ServiceType, Stylist } from '../types';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export function Checkout() {
    const params = new URLSearchParams(window.location.search);
    const [email, setEmail] = useState<string>("");
    const [service, setService] = useState<ServiceType | null>(null);
    const [stylist, setStylist] = useState<Stylist | null>(null);
    const [stylists, setStylists] = useState<Stylist[]>([]);
    const [services, setServices] = useState<ServiceType[]>([]);

    const handleServiceSelect = (selectedService: ServiceType) => {
        setService(selectedService);
    };

    const handleStylistSelect = (selectedStylist: Stylist) => {
        setStylist(selectedStylist);
    };

    // Example function to fetch and set stylists
    const fetchStylists = async () => {
        const fetchedStylists = await getStylists() as Stylist[]; // Assume getStylists is defined
        setStylists(fetchedStylists);
        const selectedStylistId = params.get("selectedStylist") || fetchedStylists[0]?.id;
        const selectedStylist = fetchedStylists.find(_=>_.id == selectedStylistId);
        if(selectedStylist) {
          setStylist(selectedStylist);
        }
    };

    // Example function to fetch and set services
    const fetchServices = async () => {
        const fetchedServices = await getServices() as Service[]; // Assume getServices is defined
        setServices(fetchedServices);
        const selectedServiceId = params.get("selectedService") || fetchedServices[0]?.id;
        const selectedService = fetchedServices.find(_=>_.id == selectedServiceId);
        if(selectedService) {
          setService(selectedService);
        }
    };

    // Call fetchStylists and fetchServices when the component mounts
    useEffect(() => {
        fetchStylists();
        fetchServices();
    }, []);

    const getStylists = async () => {
        // Fetch stylists from an API or data source
        const response = await fetch(`${environment.API_URL}/stylists/all`); // Example API endpoint
        return response.json();
    };

    const getServices = async () => {
        // Fetch services from an API or data source
        const response = await fetch(`${environment.API_URL}/services/all`); // Example API endpoint
        return response.json();
    };

    const confirmBooking = () => {
      const isValidEmail = validate(email);
      if(isValidEmail == false || email.length == 0) {
        return toast("Email is not valid", { type: "error" });
      }

      return fetch(`${environment.API_URL}/appointment/book`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          serviceId: service?.id,
          stylistId: stylist?.id,
          to: email
        })
      }).then(()=>{
        return toast("Email Sent Successfully.", { type: "success" });
      }).catch(()=> {
        return toast("Something Went Wrong.", { type: "error" });
      });
    }

    return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Checkout</h2>
      <div className='flex mb-4'>
        <h6 className="font-semibold whitespace-pre">Service: </h6>
        <select value={service?.id} onChange={(e) => {
            const selectedService = services.find(service => service.id === e.target.value);
            if (selectedService) {
                handleServiceSelect(selectedService);
            }
        }}>
          {/* Map through available services to create options */}
          {services.map(service => (
            <option key={service.id} value={service.id}>{service.name}</option>
          ))}
        </select>
      </div>
      <div className='flex mb-4'>
        <h6 className="font-semibold whitespace-pre">Stylist: </h6>
        <select value={stylist?.id} onChange={(e) => {
            const selectedStylist = stylists.find(stylist => stylist.id === e.target.value);
            if (selectedStylist) {
                handleStylistSelect(selectedStylist);
            }
        }}>
          {/* Map through available stylists to create options */}
          {stylists.map(stylist => (
            <option key={stylist.id} value={stylist.id}>{stylist.name}</option>
          ))}
        </select>
      </div>
      <div className="flex">
        <h6 className="font-semibold whitespace-pre">Email: </h6>
        <input value={email} type="email" onChange={(e) => setEmail(e.target.value)}></input>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Total:</h3>
        <p>${service?.price ?? 0}</p>
      </div>
      <button onClick={confirmBooking} className="mt-4 bg-primary-600 text-white px-4 py-2 rounded">
        Confirm Booking
      </button> 
    </div>
  );
}