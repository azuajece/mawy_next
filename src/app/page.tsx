"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, MapPin, Clock, Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description?: string;
  price: string;
  image: string;
  outOfStock?: boolean;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  products: Product[];
}

const categories: Category[] = [
  {
    id: "bebidas",
    name: "Bebidas",
    icon: "https://ext.same-assets.com/2948442445/3145321429.svg",
    products: [
      {
        id: "agua-sin-gas-500",
        name: "Agua Con/ Sin Gas 500 ml",
        description: "500 ml",
        price: "$2.000,00",
        image: "https://ext.same-assets.com/2948442445/1994515116.bin",
        outOfStock: false
      },
      {
        id: "agua-saborizada",
        name: "Agua Saborizada",
        description: "500 ml",
        price: "$2.800,00",
        image: "https://ext.same-assets.com/2948442445/593355684.bin",
        outOfStock: false
      },
      {
        id: "agua-sin-gas",
        name: "Agua Sin Gas",
        price: "$1.400,00",
        image: "https://ext.same-assets.com/2948442445/3328747655.bin",
        outOfStock: false
      },
      {
        id: "batido-frutas",
        name: "Batido Frutas",
        description: "Fresa O Bananas",
        price: "$4.950,00",
        image: "https://ext.same-assets.com/2948442445/207605604.bin",
        outOfStock: false
      },
      {
        id: "bebida-chocolatada",
        name: "Bebida Chocolatada",
        description: "De 200ml",
        price: "$1.950,00",
        image: "https://ext.same-assets.com/2948442445/3948845045.bin",
        outOfStock: false
      },
      {
        id: "gaseosas",
        name: "Gaseosas",
        description: "354 ml",
        price: "$2.900,00",
        image: "https://ext.same-assets.com/2948442445/1082931743.bin",
        outOfStock: false
      },
      {
        id: "jugo-cepita",
        name: "Jugo Cepita Del Valle",
        description: "De Manzana, Multifrutas, Durazno O Naranja 200ml",
        price: "$1.400,00",
        image: "https://ext.same-assets.com/2948442445/1560037197.bin",
        outOfStock: false
      },
      {
        id: "limonada",
        name: "Limonada",
        description: "Menta y Jengibre",
        price: "$5.500,00",
        image: "https://ext.same-assets.com/2948442445/4117344192.bin",
        outOfStock: false
      },
      {
        id: "gaseosa-grande",
        name: "Gaseosa grande",
        description: "1,75",
        price: "$5.500,00",
        image: "https://ext.same-assets.com/2948442445/804686367.bin",
        outOfStock: false
      },
      {
        id: "agua-gas-grande",
        name: "Agua con gas o sin gas grande",
        price: "$4.000,00",
        image: "https://ext.same-assets.com/2948442445/3069615658.bin",
        outOfStock: false
      },
      {
        id: "agua-saborizada-175",
        name: "Agua saborizada 1.75 Ml",
        price: "$3.850,00",
        image: "https://ext.same-assets.com/2948442445/1341291238.bin",
        outOfStock: true
      },
      {
        id: "agua-saborizada-225",
        name: "Agua Saborizada 2.25 Ml",
        price: "$4.900,00",
        image: "https://ext.same-assets.com/2948442445/2405400738.bin",
        outOfStock: true
      },
      {
        id: "exprimido-naranja",
        name: "Exprimido de Naranjaa",
        price: "$5.000,00",
        image: "https://ext.same-assets.com/2948442445/3509839246.svg",
        outOfStock: false
      }
    ]
  },
  {
    id: "cafeteria",
    name: "Cafeteria",
    icon: "https://ext.same-assets.com/2948442445/394454532.svg",
    products: [
      {
        id: "cortado",
        name: "Cortado",
        price: "$4.500,00",
        image: "https://ext.same-assets.com/2948442445/3318928610.bin",
        outOfStock: false
      },
      {
        id: "doble-expreso",
        name: "Doble Expreso",
        description: "Doble porción de Café",
        price: "$4.950,00",
        image: "https://ext.same-assets.com/2948442445/3292943060.bin",
        outOfStock: false
      },
      {
        id: "expreso",
        name: "Expreso",
        price: "$2.950,00",
        image: "https://ext.same-assets.com/2948442445/3346120493.bin",
        outOfStock: false
      },
      {
        id: "latte-cafe",
        name: "Latte Café",
        price: "$4.900,00",
        image: "https://ext.same-assets.com/2948442445/15905960.bin",
        outOfStock: false
      },
      {
        id: "shot-leche",
        name: "shot de leche",
        price: "$1.100,00",
        image: "https://ext.same-assets.com/2948442445/1066686562.bin",
        outOfStock: false
      },
      {
        id: "submarino",
        name: "Submarino",
        price: "$4.500,00",
        image: "https://ext.same-assets.com/2948442445/4107217370.bin",
        outOfStock: false
      },
      {
        id: "te-mate",
        name: "Te ó Mate Cocido",
        price: "$2.850,00",
        image: "https://ext.same-assets.com/2948442445/3963687580.bin",
        outOfStock: false
      },
      {
        id: "te-leche",
        name: "Té con leche",
        price: "$3.800,00",
        image: "https://ext.same-assets.com/2948442445/3888697240.bin",
        outOfStock: false
      },
      {
        id: "capuchino",
        name: "Capuchino",
        price: "$4.500,00",
        image: "https://ext.same-assets.com/2948442445/1692298618.bin",
        outOfStock: false
      },
      {
        id: "lagrima",
        name: "Lagrima",
        price: "$4.500,00",
        image: "https://ext.same-assets.com/2948442445/852308700.bin",
        outOfStock: false
      }
    ]
  },
  {
    id: "combos",
    name: "Combos",
    icon: "https://ext.same-assets.com/2948442445/225394772.svg",
    products: [
      {
        id: "combo-medialuna",
        name: "Combo de Medialuna + Cafe",
        price: "$6.300,00",
        image: "https://ext.same-assets.com/2948442445/3085511143.bin",
        outOfStock: false
      },
      {
        id: "combo-budin",
        name: "Combo Budín + Cafe",
        description: "Limón y Chocolate",
        price: "$7.300,00",
        image: "https://ext.same-assets.com/2948442445/922421466.bin",
        outOfStock: false
      },
      {
        id: "combo-tostado",
        name: "Combo Tostado Crema + Cafe",
        price: "$7.500,00",
        image: "https://ext.same-assets.com/2948442445/2591505186.bin",
        outOfStock: false
      }
    ]
  },
  {
    id: "combos-infantiles",
    name: "Combos Infantiles",
    icon: "https://ext.same-assets.com/2948442445/1968805289.svg",
    products: [
      {
        id: "combo-nuggets",
        name: "Combo de Nuggets + Jugo",
        price: "$7.500,00",
        image: "https://ext.same-assets.com/2948442445/170931740.bin",
        outOfStock: false
      },
      {
        id: "combo-hamburguesa",
        name: "Combo Mini Hamburguesa + Jugo",
        price: "$8.000,00",
        image: "https://ext.same-assets.com/2948442445/3914247193.bin",
        outOfStock: false
      },
      {
        id: "combo-pancho",
        name: "Combo Mini Pancho + Juguito",
        price: "$6.500,00",
        image: "https://ext.same-assets.com/2948442445/3639602301.bin",
        outOfStock: false
      }
    ]
  },
  {
    id: "extras",
    name: "Extras",
    icon: "https://ext.same-assets.com/2948442445/2754619991.svg",
    products: [
      {
        id: "papas-fritas",
        name: "Porción De Papas Fritas",
        price: "$3.900,00",
        image: "https://ext.same-assets.com/2948442445/2127152300.bin",
        outOfStock: false
      },
      {
        id: "tequenos",
        name: "Tequeños",
        price: "$5.500,00",
        image: "https://ext.same-assets.com/2948442445/3267419729.bin",
        outOfStock: false
      },
      {
        id: "cumpleanos",
        name: "CUMPLEAÑOS",
        price: "$13,00",
        image: "https://ext.same-assets.com/2948442445/3509839246.svg",
        outOfStock: false
      },
      {
        id: "frutas",
        name: "Porción de Frutas",
        price: "$1.200,00",
        image: "https://ext.same-assets.com/2948442445/3509839246.svg",
        outOfStock: false
      }
    ]
  },
  {
    id: "frappe",
    name: "Frappe",
    icon: "https://ext.same-assets.com/2948442445/489297168.svg",
    products: [
      {
        id: "frappe",
        name: "Frappe",
        description: "Frutilla, Chocolate O Dulce de leche",
        price: "$5.900,00",
        image: "https://ext.same-assets.com/2948442445/1186022298.bin",
        outOfStock: false
      },
      {
        id: "frappe-especial",
        name: "Frappe Especial",
        description: "Nutella, Oreo O Chocotorta",
        price: "$6.500,00",
        image: "https://ext.same-assets.com/2948442445/1284470448.bin",
        outOfStock: false
      }
    ]
  },
  {
    id: "panaderia-salada",
    name: "Panadería Salada",
    icon: "https://ext.same-assets.com/2948442445/1139506901.svg",
    products: [
      {
        id: "croissant",
        name: "Croissant",
        description: "Jamón Y Queso",
        price: "$3.900,00",
        image: "https://ext.same-assets.com/2948442445/1370611157.bin",
        outOfStock: false
      },
      {
        id: "media-luna-jq",
        name: "Media Luna Con Jamón y queso",
        description: "Jamón Y Queso",
        price: "$3.600,00",
        image: "https://ext.same-assets.com/2948442445/2126455212.bin",
        outOfStock: false
      },
      {
        id: "sandwiches",
        name: "Sándwiches de Jamón y queso",
        description: "pan lactal, campo, integral y sin Tac",
        price: "$4.900,00",
        image: "https://ext.same-assets.com/2948442445/2311784236.bin",
        outOfStock: false
      },
      {
        id: "pan-sin-tac",
        name: "Pan sin Tac / huevo y Palta",
        price: "$6.000,00",
        image: "https://ext.same-assets.com/2948442445/356836166.bin",
        outOfStock: false
      },
      {
        id: "tostado-jq",
        name: "Tostado de J/Q",
        price: "$4.900,00",
        image: "https://ext.same-assets.com/2948442445/3509839246.svg",
        outOfStock: false
      }
    ]
  },
  {
    id: "empanadas",
    name: "Empanadas",
    icon: "https://ext.same-assets.com/2948442445/2990553128.svg",
    products: []
  },
  {
    id: "panaderia-pasteleria",
    name: "Panadería Y Pastelería",
    icon: "https://ext.same-assets.com/2948442445/1727400378.svg",
    products: [
      {
        id: "brownie",
        name: "Brownie",
        price: "$3.800,00",
        image: "https://ext.same-assets.com/2948442445/3180908237.bin",
        outOfStock: false
      },
      {
        id: "brownie-helado",
        name: "Brownie Con Helado",
        price: "$4.950,00",
        image: "https://ext.same-assets.com/2948442445/516008207.bin",
        outOfStock: false
      },
      {
        id: "budin",
        name: "Budín",
        description: "Limón O Chocolate",
        price: "$3.900,00",
        image: "https://ext.same-assets.com/2948442445/4096331500.bin",
        outOfStock: false
      },
      {
        id: "cheesecake",
        name: "Cheeses Cake De Frutos Rojos",
        description: "Frutos Rojos",
        price: "$6.200,00",
        image: "https://ext.same-assets.com/2948442445/4168178080.bin",
        outOfStock: false
      },
      {
        id: "chipa",
        name: "Chipa 6 X Unidades",
        price: "$5.500,00",
        image: "https://ext.same-assets.com/2948442445/1384623006.bin",
        outOfStock: false
      },
      {
        id: "chocotorta",
        name: "Chocotorta",
        price: "$6.200,00",
        image: "https://ext.same-assets.com/2948442445/871750079.bin",
        outOfStock: false
      },
      {
        id: "limon-pie",
        name: "Limón Pie",
        price: "$6.200,00",
        image: "https://ext.same-assets.com/2948442445/806990726.bin",
        outOfStock: false
      },
      {
        id: "media-luna",
        name: "Media Luna",
        price: "$950,00",
        image: "https://ext.same-assets.com/2948442445/21019094.bin",
        outOfStock: false
      },
      {
        id: "pain-chocolate",
        name: "Pain De Chocolate",
        price: "$2.800,00",
        image: "https://ext.same-assets.com/2948442445/86265168.bin",
        outOfStock: false
      },
      {
        id: "roll-canela",
        name: "Roll De Canela",
        price: "$3.900,00",
        image: "https://ext.same-assets.com/2948442445/1705613743.bin",
        outOfStock: false
      },
      {
        id: "croissant-crema",
        name: "Croissant con Crema y frutilla",
        price: "$4.950,00",
        image: "https://ext.same-assets.com/2948442445/3754900392.bin",
        outOfStock: false
      },
      {
        id: "croissant-jq",
        name: "Croisannt J/Q",
        price: "$4.950,00",
        image: "https://ext.same-assets.com/2948442445/3509839246.svg",
        outOfStock: false
      }
    ]
  },
  {
    id: "panqueques",
    name: "Panqueques",
    icon: "https://ext.same-assets.com/2948442445/4291511485.svg",
    products: [
      {
        id: "panqueque-ddl",
        name: "Panqueque Ddl Y Fresa",
        price: "$4.950,00",
        image: "https://ext.same-assets.com/2948442445/1066081360.bin",
        outOfStock: false
      },
      {
        id: "panqueque-jq",
        name: "Panqueque Jamón Y Queso",
        price: "$4.950,00",
        image: "https://ext.same-assets.com/2948442445/3730422203.bin",
        outOfStock: false
      },
      {
        id: "panqueque-miel",
        name: "Panqueque Miel",
        price: "$4.600,00",
        image: "https://ext.same-assets.com/2948442445/3741796272.bin",
        outOfStock: false
      },
      {
        id: "panqueque-crema",
        name: "Panqueque Queso Crema Y Mermeladas",
        price: "$4.950,00",
        image: "https://ext.same-assets.com/2948442445/3553294757.bin",
        outOfStock: false
      },
      {
        id: "panqueques-ddl",
        name: "Panqueques Dulce de Leche",
        price: "$4.950,00",
        image: "https://ext.same-assets.com/2948442445/1231758951.bin",
        outOfStock: false
      }
    ]
  },
  {
    id: "pizzas",
    name: "Pizzas",
    icon: "https://ext.same-assets.com/2948442445/3712633430.svg",
    products: [
      {
        id: "pizza-jq",
        name: "Pizza Jamón Y Queso",
        description: "Pizza Grande Para Compartir",
        price: "$15.500,00",
        image: "https://ext.same-assets.com/2948442445/3494418923.bin",
        outOfStock: false
      },
      {
        id: "pizza-mozzarella",
        name: "Pizza Mozzarella",
        description: "Pizza Grande Para Compartir",
        price: "$14.000,00",
        image: "https://ext.same-assets.com/2948442445/82967435.bin",
        outOfStock: false
      },
      {
        id: "mini-pizza",
        name: "Mini Pizza Mozza",
        price: "$8.000,00",
        image: "https://ext.same-assets.com/2948442445/2742312222.bin",
        outOfStock: false
      }
    ]
  },
  {
    id: "plato-caliente",
    name: "Plato Caliente",
    icon: "https://ext.same-assets.com/2948442445/2850331894.svg",
    products: [
      {
        id: "hamburguesa",
        name: "Hamburguesa De Carne Con Papas Fritas",
        price: "$11.800,00",
        image: "https://ext.same-assets.com/2948442445/769113719.bin",
        outOfStock: false
      },
      {
        id: "milanesa",
        name: "Milanesa De Pollo O Ternera Con Papas Fritas",
        price: "$11.800,00",
        image: "https://ext.same-assets.com/2948442445/4002647996.bin",
        outOfStock: false
      },
      {
        id: "super-pancho",
        name: "Super Pancho Con Papas Fritas",
        price: "$5.000,00",
        image: "https://ext.same-assets.com/2948442445/1432090264.bin",
        outOfStock: false
      }
    ]
  },
  {
    id: "tostadas",
    name: "Tostadas",
    icon: "https://ext.same-assets.com/2948442445/2062721780.svg",
    products: [
      {
        id: "tostado-ddl",
        name: "Tostado Dulce De Leche Y Manteca",
        description: "Pan Lactal, Campo O Pan Integral",
        price: "$4.900,00",
        image: "https://ext.same-assets.com/2948442445/2918135900.bin",
        outOfStock: false
      },
      {
        id: "tostado-mermelada",
        name: "Tostado Mermelada Y Queso Crema",
        description: "Pan Lactal O Pan Integral",
        price: "$4.900,00",
        image: "https://ext.same-assets.com/2948442445/1188039280.bin",
        outOfStock: false
      },
      {
        id: "tostado-palta",
        name: "Tostado Palta Queso Crema Y Huevo",
        description: "Pan Lactal, Campo O Pan Integral",
        price: "$6.600,00",
        image: "https://ext.same-assets.com/2948442445/1528879743.bin",
        outOfStock: false
      },
      {
        id: "tostado-sin-tac",
        name: "Tostado Sin Tac/ Huevo/ palta",
        price: "$7.200,00",
        image: "https://ext.same-assets.com/2948442445/3359057979.bin",
        outOfStock: false
      },
      {
        id: "tostado-jamon",
        name: "Tostado Jamón y queso",
        price: "$4.900,00",
        image: "https://ext.same-assets.com/2948442445/3509839246.svg",
        outOfStock: false
      }
    ]
  },
  {
    id: "waffles",
    name: "Waffles",
    icon: "https://ext.same-assets.com/2948442445/3805317585.svg",
    products: [
      {
        id: "waffle-banana",
        name: "Waffle Banana",
        price: "$7.500,00",
        image: "https://ext.same-assets.com/2948442445/798093468.bin",
        outOfStock: false
      },
      {
        id: "waffle-chocolate",
        name: "Waffle Chocolate Crema Y Salsa de chocolate",
        price: "$5.950,00",
        image: "https://ext.same-assets.com/2948442445/2291036955.bin",
        outOfStock: false
      },
      {
        id: "waffle-ddl",
        name: "Waffle Dulce de leche, Creme Y Salsa DDL",
        price: "$5.950,00",
        image: "https://ext.same-assets.com/2948442445/508061998.bin",
        outOfStock: false
      },
      {
        id: "waffle-super",
        name: "Waffle Súper Mawy",
        description: "Nutella, creme, fresa ,banana y salsa",
        price: "$8.500,00",
        image: "https://ext.same-assets.com/2948442445/1099287631.bin",
        outOfStock: false
      },
      {
        id: "waffle-nutella",
        name: "Waffle Nutella Crema Y Salsa",
        description: "Nutella, creme, salsa",
        price: "$7.500,00",
        image: "https://ext.same-assets.com/2948442445/1010743653.bin",
        outOfStock: false
      }
    ]
  },
  {
    id: "juegos",
    name: "juegos",
    icon: "https://ext.same-assets.com/2948442445/1242560923.svg",
    products: [
      {
        id: "2-horas",
        name: "2 horas de juego",
        price: "$14.000,00",
        image: "https://ext.same-assets.com/2948442445/3509839246.svg",
        outOfStock: false
      },
      {
        id: "1-hora",
        name: "Hora de Juego",
        price: "$8.000,00",
        image: "https://ext.same-assets.com/2948442445/3509839246.svg",
        outOfStock: false
      }
    ]
  },
  {
    id: "churros",
    name: "Churros",
    icon: "https://ext.same-assets.com/2948442445/3229962984.svg",
    products: [
      {
        id: "churros-6",
        name: "Churros 6 unidades",
        price: "$5.500,00",
        image: "https://ext.same-assets.com/2948442445/3509839246.svg",
        outOfStock: false
      }
    ]
  }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = categories.filter(category => {
    if (!searchQuery) return true;
    return category.products.some(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const filteredProducts = (products: Product[]) => {
    if (!searchQuery) return products;
    return products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Logo and Restaurant Info */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20">
                <Image
                  src="https://ext.same-assets.com/2948442445/2308272661.bin"
                  alt="Mawy Logo"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Mawy</h1>
                <div className="space-y-1 text-sm text-gray-600 mt-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Av San Martín 2288, CABA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>12 a 20 Hrs de Martes a Domingo</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right space-y-1 text-sm text-gray-600">
              <div className="flex items-center gap-2 justify-end">
                <Phone className="w-4 h-4" />
                <span>1166690314</span>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <Mail className="w-4 h-4" />
                <span>mawykids@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Contact Channels */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Nuestros canales de contacto
              </h3>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-green-500 hover:bg-green-600 text-white border-green-500"
                >
                  <Image
                    src="https://ext.same-assets.com/2948442445/3285946756.svg"
                    alt="WhatsApp"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  WhatsApp
                </Button>
                <Button variant="outline" size="sm">
                  <Image
                    src="https://ext.same-assets.com/2948442445/11047904.svg"
                    alt="Facebook"
                    width={16}
                    height={16}
                  />
                </Button>
                <Button variant="outline" size="sm">
                  <Image
                    src="https://ext.same-assets.com/2948442445/1134670876.svg"
                    alt="Instagram"
                    width={16}
                    height={16}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Buscar productos por nombre"
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white border-b border-gray-200 px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-4 pb-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant="outline"
                  className={`flex-shrink-0 flex flex-col items-center gap-2 p-4 h-auto min-w-[100px] rounded-full border-2 ${
                    selectedCategory === category.id
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-200 hover:border-orange-300"
                  }`}
                  onClick={() => setSelectedCategory(
                    selectedCategory === category.id ? null : category.id
                  )}
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Image
                      src={category.icon}
                      alt={category.name}
                      width={24}
                      height={24}
                      className="text-orange-600"
                    />
                  </div>
                  <span className="text-xs font-medium text-center leading-tight">
                    {category.name}
                  </span>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Menu Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        {filteredCategories
          .filter(category =>
            !selectedCategory || category.id === selectedCategory
          )
          .map((category) => {
            const products = filteredProducts(category.products);
            if (products.length === 0) return null;

            return (
              <section key={category.id} className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">
                  {category.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <div className="aspect-square relative">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {product.outOfStock && (
                          <Badge
                            variant="destructive"
                            className="absolute top-2 left-2 bg-red-500"
                          >
                            Sin Stock
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {product.name}
                        </h3>
                        {product.description && (
                          <p className="text-sm text-gray-600 mb-2">
                            {product.description}
                          </p>
                        )}
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-orange-600">
                            {product.price}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            );
          })}
      </main>
    </div>
  );
}
