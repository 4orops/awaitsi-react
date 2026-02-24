import React, { useState } from 'react';
import { Search, MapPin, Bed, Bath, Square, Heart, X, ChevronDown, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Property {
    id: number;
    title: string;
    price: number;
    location: string;
    beds: number;
    baths: number;
    sqm: number;
    type: 'House' | 'Apartment' | 'Villa';
    image: string;
    featured?: boolean;
}

// --- Mock Data ---
const PROPERTIES: Property[] = [
    {
        id: 1,
        title: "Modern Glass Villa",
        price: 12500000,
        location: "Camps Bay, Cape Town",
        beds: 5,
        baths: 4.5,
        sqm: 650,
        type: "Villa",
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=2670",
        featured: true
    },
    {
        id: 2,
        title: "Eco-Friendly Penthouse",
        price: 4500000,
        location: "Sandton, Johannesburg",
        beds: 3,
        baths: 3,
        sqm: 220,
        type: "Apartment",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2670"
    },
    {
        id: 3,
        title: "Minimalist Family Home",
        price: 3200000,
        location: "Umhlanga, Durban",
        beds: 4,
        baths: 3,
        sqm: 350,
        type: "House",
        image: "https://images.unsplash.com/photo-1600596542815-e49938d15a95?auto=format&fit=crop&q=80&w=2675"
    },
    {
        id: 4,
        title: "Clifton Beach House",
        price: 28000000,
        location: "Clifton, Cape Town",
        beds: 6,
        baths: 6,
        sqm: 800,
        type: "Villa",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2653",
        featured: true
    },
    {
        id: 5,
        title: "Urban Loft",
        price: 1800000,
        location: "Maboneng, Johannesburg",
        beds: 1,
        baths: 1,
        sqm: 85,
        type: "Apartment",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=2670"
    },
    {
        id: 6,
        title: "Winelands Estate",
        price: 15900000,
        location: "Stellenbosch, Western Cape",
        beds: 5,
        baths: 5,
        sqm: 900,
        type: "House",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=2670"
    }
];

// --- Components ---

const FilterBar = ({ onFilter }: { onFilter: (filters: any) => void }) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex flex-wrap gap-4 items-center justify-between sticky top-24 z-20">
            <div className="flex items-center gap-2 flex-1 min-w-[200px]">
                <Search className="text-gray-400 w-5 h-5" />
                <input
                    placeholder="Search location, suburb..."
                    className="w-full outline-none text-gray-700 font-medium"
                />
            </div>
            <div className="h-8 w-px bg-gray-200 hidden md:block"></div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                {['Any Price', 'Property Type', 'Beds', 'Baths'].map((filter) => (
                    <button key={filter} className="px-4 py-2 border border-gray-200 rounded-lg hover:border-gray-900 transition whitespace-nowrap flex items-center gap-2 text-sm font-semibold text-gray-700">
                        {filter} <ChevronDown className="w-4 h-4" />
                    </button>
                ))}
            </div>
            <button className="p-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
                <Filter className="w-5 h-5" />
            </button>
        </div>
    );
};

const PropertyCard = ({ property, onClick }: { property: Property; onClick: () => void }) => {
    return (
        <motion.div
            layoutId={`card-${property.id}`}
            onClick={onClick}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
        >
            <div className="relative h-64 overflow-hidden">
                <motion.img
                    layoutId={`image-${property.id}`}
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                    <Heart className="w-5 h-5 text-gray-900 hover:fill-red-500 hover:text-red-500 transition" />
                </div>
                {property.featured && (
                    <div className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        Featured
                    </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-bold text-2xl">R {property.price.toLocaleString()}</p>
                </div>
            </div>
            <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-900">{property.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                        <Bed className="w-4 h-4 text-gray-400" /> {property.beds}
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                        <Bath className="w-4 h-4 text-gray-400" /> {property.baths}
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                        <Square className="w-4 h-4 text-gray-400" /> {property.sqm}m²
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const PropertyModal = ({ property, onClose }: { property: Property; onClose: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                layoutId={`card-${property.id}`}
                className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur-md rounded-full hover:bg-white transition"
                >
                    <X className="w-6 h-6 text-gray-900" />
                </button>

                <div className="md:w-3/5 h-[300px] md:h-auto relative">
                    <motion.img
                        layoutId={`image-${property.id}`}
                        src={property.image}
                        alt={property.title || 'Property image'}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="md:w-2/5 p-8 flex flex-col overflow-y-auto">
                    <div className="mb-auto">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                            <span className="px-2 py-1 bg-gray-100 rounded text-gray-900 font-semibold">{property.type}</span>
                            <span>•</span>
                            <span>{property.location}</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-2 text-gray-900">{property.title}</h2>
                        <p className="text-3xl font-light text-gray-900 mb-6">R {property.price.toLocaleString()}</p>

                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div className="text-center p-3 bg-gray-50 rounded-xl">
                                <Bed className="w-6 h-6 mx-auto mb-1 text-gray-400" />
                                <span className="font-bold text-gray-900 block">{property.beds}</span>
                                <span className="text-xs text-gray-500">Beds</span>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-xl">
                                <Bath className="w-6 h-6 mx-auto mb-1 text-gray-400" />
                                <span className="font-bold text-gray-900 block">{property.baths}</span>
                                <span className="text-xs text-gray-500">Baths</span>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-xl">
                                <Square className="w-6 h-6 mx-auto mb-1 text-gray-400" />
                                <span className="font-bold text-gray-900 block">{property.sqm}</span>
                                <span className="text-xs text-gray-500">Sqm</span>
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            Experience luxury living at its finest. This stunning property features modern finishes,
                            spacious living areas, and breathtaking views. Perfect for entertaining or a quiet family retreat.
                        </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
                        <button className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition shadow-lg">
                            Contact Agent
                        </button>
                        <button className="w-full py-4 bg-white border border-gray-200 text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition">
                            Download Brochure
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const RealEstateLayout = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-20">
            <header className="bg-white sticky top-0 z-30 shadow-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white">
                            <HomeIcon />
                        </div>
                        <span className="font-bold text-xl tracking-tight">Luxe<span className="font-light">Estates</span></span>
                    </div>
                    <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-600">
                        <a href="#" className="text-gray-900">Buy</a>
                        <a href="#" className="hover:text-gray-900 transition">Rent</a>
                        <a href="#" className="hover:text-gray-900 transition">Developments</a>
                        <a href="#" className="hover:text-gray-900 transition">Sold</a>
                    </div>
                    <button className="px-6 py-2 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition">
                        List Property
                    </button>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 pt-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Find your sanctuary.</h1>
                    <p className="text-xl text-gray-500">Discover South Africa's most exclusive properties.</p>
                </motion.div>

                <FilterBar onFilter={() => { }} />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {PROPERTIES.map(property => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                            onClick={() => setSelectedId(property.id)}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {(() => {
                    const property = PROPERTIES.find(p => p.id === selectedId);
                    return property ? (
                        <PropertyModal property={property} onClose={() => setSelectedId(null)} />
                    ) : null;
                })()}
            </AnimatePresence>
        </div>
    );
};

function HomeIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
    )
}

export default RealEstateLayout;
