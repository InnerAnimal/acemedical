export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image?: string;
  featured?: boolean;
}

export const productCategories = [
  "Mobility Aids",
  "Home Medical Equipment",
  "Diagnostic Equipment",
  "Patient Care Supplies",
  "Respiratory Equipment",
  "Incontinence Products"
];

export const products: Product[] = [
  // Mobility Aids
  {
    id: "1",
    name: "Wheelchairs",
    category: "Mobility Aids",
    description: "Manual and power wheelchairs for all mobility needs",
    featured: true
  },
  {
    id: "2",
    name: "Walkers & Rollators",
    category: "Mobility Aids",
    description: "Lightweight and durable walking assistance devices",
    featured: true
  },
  {
    id: "3",
    name: "Canes & Crutches",
    category: "Mobility Aids",
    description: "Supportive walking aids in various styles and sizes"
  },
  
  // Home Medical Equipment
  {
    id: "4",
    name: "Hospital Beds",
    category: "Home Medical Equipment",
    description: "Adjustable home hospital beds for patient comfort",
    featured: true
  },
  {
    id: "5",
    name: "Patient Lifts",
    category: "Home Medical Equipment",
    description: "Safe patient transfer and lifting equipment"
  },
  {
    id: "6",
    name: "Bathroom Safety",
    category: "Home Medical Equipment",
    description: "Grab bars, shower chairs, and raised toilet seats"
  },
  
  // Diagnostic Equipment
  {
    id: "7",
    name: "Blood Pressure Monitors",
    category: "Diagnostic Equipment",
    description: "Digital and manual blood pressure monitoring devices",
    featured: true
  },
  {
    id: "8",
    name: "Pulse Oximeters",
    category: "Diagnostic Equipment",
    description: "Accurate oxygen saturation and pulse rate monitors"
  },
  {
    id: "9",
    name: "Thermometers",
    category: "Diagnostic Equipment",
    description: "Digital and infrared temperature monitoring"
  },
  
  // Patient Care Supplies
  {
    id: "10",
    name: "Wound Care",
    category: "Patient Care Supplies",
    description: "Bandages, dressings, and wound care products"
  },
  {
    id: "11",
    name: "Compression Garments",
    category: "Patient Care Supplies",
    description: "Medical-grade compression stockings and sleeves"
  },
  {
    id: "12",
    name: "Diabetic Supplies",
    category: "Patient Care Supplies",
    description: "Blood glucose monitors, lancets, and test strips",
    featured: true
  },
  
  // Respiratory Equipment
  {
    id: "13",
    name: "Nebulizers",
    category: "Respiratory Equipment",
    description: "Portable and tabletop nebulizer systems",
    featured: true
  },
  {
    id: "14",
    name: "CPAP Machines",
    category: "Respiratory Equipment",
    description: "Sleep apnea treatment equipment and supplies"
  },
  {
    id: "15",
    name: "Oxygen Concentrators",
    category: "Respiratory Equipment",
    description: "Home oxygen therapy equipment"
  },
  
  // Incontinence Products
  {
    id: "16",
    name: "Adult Diapers",
    category: "Incontinence Products",
    description: "Comfortable and discreet incontinence protection"
  },
  {
    id: "17",
    name: "Protective Bedding",
    category: "Incontinence Products",
    description: "Waterproof mattress pads and bed protectors"
  }
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductsByCategory = (category: string) => 
  products.filter(p => p.category === category);
