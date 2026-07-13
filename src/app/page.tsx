"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Phone, UtensilsCrossed, QrCode, Smartphone, ArrowDown } from "lucide-react";
import QRCode from "react-qr-code";

// --- DATA ---
const categories = ["Todos", "Tacos", "Quesadillas", "Sopes", "Gorditas", "Especialidades"];

const products = [
  {
    id: 1,
    name: "Tacos al Pastor",
    description: "Orden de 5 tacos con piña, cilantro, cebolla y nuestra salsa especial de la casa.",
    price: "$65.00",
    category: "Tacos",
    image: "/images/tacos.jpg",
  },
  {
    id: 2,
    name: "Quesadillas Tradicionales",
    description: "Hechas a mano con queso Oaxaca, epazote y champiñones o flor de calabaza.",
    price: "$35.00",
    category: "Quesadillas",
    image: "/images/quesadillas.jpg",
  },
  {
    id: 3,
    name: "Sopes Preparados",
    description: "Sope grueso con frijoles, salsa verde o roja, queso fresco, lechuga y crema.",
    price: "$40.00",
    category: "Sopes",
    image: "/images/sopes.jpg",
  },
  {
    id: 4,
    name: "Gorditas Mexicanas",
    description: "Rellenas de chicharrón prensado, requesón o carnitas, servidas calientes.",
    price: "$45.00",
    category: "Gorditas",
    image: "/images/gorditas.jpg",
  },
  {
    id: 5,
    name: "Enchiladas Suizas",
    description: "Bañadas en salsa verde cremosa y gratinadas al horno. (Especialidad de la casa)",
    price: "$90.00",
    category: "Especialidades",
    image: "/images/especialidad.jpg",
  },
];

function QRCodeDemo() {
  return (
    <section id="qr-demo" className="px-5 py-8 bg-gradient-to-br from-brand-sand/10 to-transparent mx-4 md:mx-auto max-w-4xl rounded-3xl mt-4 mb-10 shadow-sm border border-brand-sand/30 overflow-hidden relative">
      <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
        <div className="w-full md:w-1/3 flex justify-center">
          <motion.div 
            initial={{ rotate: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-4 rounded-2xl shadow-xl border-4 border-white flex flex-col items-center"
          >
            <QRCode 
              value="http://localhost:3000" 
              size={160}
              fgColor="#2d1b11"
              level="M"
            />
            <p className="mt-3 font-semibold text-brand-red text-sm font-outfit">Escanea para ver nuestro menú</p>
          </motion.div>
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full mb-3 text-sm font-semibold">
            <QrCode size={16} /> Demostración Interactiva
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-outfit text-brand-red mb-6">
            ¿Cómo funciona?
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 text-foreground/80 font-medium">
            <div className="flex flex-col items-center text-center max-w-[120px]">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mb-2 text-brand-orange">
                <Smartphone size={24} />
              </div>
              <span className="text-sm">1. Escanea el QR</span>
            </div>
            
            <ArrowDown className="sm:-rotate-90 text-brand-red/30 hidden sm:block" />
            
            <div className="flex flex-col items-center text-center max-w-[120px]">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mb-2 text-brand-orange">
                <UtensilsCrossed size={24} />
              </div>
              <span className="text-sm">2. Explora nuestro menú</span>
            </div>
            
            <ArrowDown className="sm:-rotate-90 text-brand-red/30 hidden sm:block" />
            
            <div className="flex flex-col items-center text-center max-w-[120px]">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mb-2 text-brand-orange">
                <span className="text-2xl">🌮</span>
              </div>
              <span className="text-sm">3. Disfruta nuestros platillos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const scrollToQR = () => {
    document.getElementById("qr-demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-brand-orange selection:text-white pb-0">
      
      {/* FLOATING ACTION BUTTON */}
      <button 
        onClick={scrollToQR}
        className="fixed top-4 right-4 z-50 bg-white text-brand-red font-bold px-4 py-2 rounded-full shadow-lg border border-brand-red/20 flex items-center gap-2 hover:bg-brand-red hover:text-white transition-colors duration-300"
      >
        <Smartphone size={18} />
        Escanear menú
      </button>

      {/* HERO SECTION */}
      <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/images/hero-antojitos.jpg"
          alt="Antojitos Mexicanos Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="relative z-20 text-center px-4 flex flex-col items-center mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-4 bg-brand-red/90 p-3.5 rounded-full inline-flex text-white shadow-2xl"
          >
            <UtensilsCrossed size={36} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white font-outfit mb-3 drop-shadow-lg"
          >
            El Rincón del Antojo
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-amber-50 font-medium tracking-wide drop-shadow-md"
          >
            Sabor mexicano tradicional
          </motion.p>
        </div>
        
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-background rounded-t-[2.5rem] z-20" />
      </section>

      {/* QR CONCEPT DEMO SECTION */}
      <QRCodeDemo />

      {/* CATEGORY TABS (STICKY) */}
      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-md shadow-sm pb-3 pt-5 px-4 mb-8">
        <div className="flex space-x-3 overflow-x-auto scrollbar-hide py-2 snap-x max-w-4xl mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`snap-start whitespace-nowrap px-6 py-2.5 rounded-full font-medium transition-all duration-300 ease-out text-sm border ${
                activeCategory === category
                  ? "bg-brand-red text-white border-brand-red shadow-lg transform scale-105"
                  : "bg-white text-gray-700 border-gray-200 hover:border-brand-red/40 hover:bg-red-50/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCT LIST */}
      <section className="px-4 max-w-4xl mx-auto min-h-[50vh] pb-12">
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={product.id}
                className="bg-card-bg rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-brand-green font-bold text-sm shadow-md">
                    {product.price}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium tracking-wide">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow relative">
                  <div className="absolute top-0 right-8 transform -translate-y-1/2 w-10 h-10 bg-brand-red rounded-full flex items-center justify-center shadow-lg text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <UtensilsCrossed size={18} />
                  </div>
                  <h3 className="text-xl font-bold font-outfit text-foreground mb-3 pr-8">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed flex-grow">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p>No hay productos en esta categoría por ahora.</p>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="mt-8 bg-brand-red text-white pt-14 pb-10 px-6 rounded-t-[3rem] shadow-[0_-10px_40px_rgb(0,0,0,0.1)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-outfit font-bold text-2xl text-white mb-4 flex items-center gap-2">
                <UtensilsCrossed size={24} /> El Rincón del Antojo
              </h4>
              <p className="text-sm text-red-100/90 leading-relaxed">
                Sabor auténtico en cada mordida. Preparado con amor, tradición y los mejores ingredientes de México.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-outfit font-bold text-xl text-white mb-5 flex items-center gap-2">
                <Clock size={20} className="text-brand-sand" /> Horario
              </h4>
              <ul className="space-y-2 text-sm text-red-100/90">
                <li className="flex justify-between w-48 border-b border-red-500/30 pb-1">
                  <span>Lun - Vie:</span> <span>12:00 PM - 10:00 PM</span>
                </li>
                <li className="flex justify-between w-48 pt-1">
                  <span>Sáb - Dom:</span> <span>10:00 AM - 11:00 PM</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-outfit font-bold text-xl text-white mb-5 flex items-center gap-2">
                <MapPin size={20} className="text-brand-sand" /> Ubicación
              </h4>
              <p className="text-sm text-red-100/90 mb-4 leading-relaxed">
                Av. Revolución 1234<br/>Centro Histórico, CDMX
              </p>
              <a href="tel:+525551234567" className="text-sm font-semibold flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors w-fit">
                <Phone size={16} /> (555) 123-4567
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm font-light text-red-200">
              Diseño digital por <span className="font-bold text-white tracking-wider">NEXORA Digital</span>
            </p>
            <p className="text-xs text-red-200/60 font-mono">
              © {new Date().getFullYear()} Demo Project.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
