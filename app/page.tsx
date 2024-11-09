"use client";

import { AlertTriangle, Coffee, IceCream, Plus, Sandwich } from "lucide-react";
import React, { useState } from "react";

// Menu item types
interface MenuItemProps {
  name: string;
  description?: string;
  price: string;
  discountedPrice: string;
}

// Menu items structure
const menuItems: Record<string, MenuItemProps[]> = {
  "hot-coffee": [
    {
      name: "Espresso",
      description: "Strong, bold coffee shot",
      price: "89.00",
      discountedPrice: "98.00",
    },
    {
      name: "Americano",
      description: "Espresso with hot water",
      price: "109.00",
      discountedPrice: "120.00",
    },
    {
      name: "Espresso Macchiato",
      description: "Espresso with a dollop of foam",
      price: "109.00",
      discountedPrice: "120.00",
    },
    {
      name: "Cappuccino",
      description: "Espresso, steamed milk, and foam",
      price: "129.00",
      discountedPrice: "142.00",
    },
    {
      name: "Hot Chocolate",
      description: "Rich, creamy chocolate drink",
      price: "129.00",
      discountedPrice: "142.00",
    },
    {
      name: "Lotus Biscoff Hot Chocolate",
      description: "Chocolate with a hint of Lotus Biscoff",
      price: "159.00",
      discountedPrice: "175.00",
    },
    {
      name: "Mocha",
      description: "Coffee and chocolate blend",
      price: "159.00",
      discountedPrice: "175.00",
    },
    {
      name: "Flavored Latte",
      description:
        "Latte with Hazelnut, Vanilla, Irish, Tiramisu, or Caramel flavor",
      price: "169.00",
      discountedPrice: "186.00",
    },
  ],
  "cold-drinks": [
    {
      name: "Banana Shake",
      description: "Fresh banana and milk blend",
      price: "139.00",
      discountedPrice: "153.00",
    },
    {
      name: "Chocolate Shake",
      description: "Rich and creamy chocolate shake",
      price: "139.00",
      discountedPrice: "153.00",
    },
    {
      name: "Strawberry Shake",
      description: "Strawberry flavored milkshake",
      price: "139.00",
      discountedPrice: "153.00",
    },
    {
      name: "Vanilla Shake",
      description: "Classic vanilla milkshake",
      price: "139.00",
      discountedPrice: "153.00",
    },
    {
      name: "Mango Shake",
      description: "Made with fresh mango pulp",
      price: "149.00",
      discountedPrice: "164.00",
    },
    {
      name: "Butterscotch Shake",
      description: "Creamy with a hint of butterscotch",
      price: "149.00",
      discountedPrice: "164.00",
    },
    {
      name: "Blackcurrant Shake",
      description: "Blackcurrant flavored shake",
      price: "159.00",
      discountedPrice: "175.00",
    },
    {
      name: "Blueberry Shake",
      description: "Blueberry infused milkshake",
      price: "169.00",
      discountedPrice: "186.00",
    },
    {
      name: "Red Velvet Shake",
      description: "Red velvet cake-inspired shake",
      price: "179.00",
      discountedPrice: "197.00",
    },
    {
      name: "Lotus Biscoff Shake",
      description: "Creamy shake with Lotus Biscoff",
      price: "189.00",
      discountedPrice: "208.00",
    },
  ],
  food: [
    {
      name: "Plain Cheese Sandwich",
      description: "Simple and classic cheese sandwich",
      price: "139.00",
      discountedPrice: "153.00",
    },
    {
      name: "Cheese Chilly Garlic Sandwich",
      description: "Spicy cheese sandwich with garlic",
      price: "159.00",
      discountedPrice: "175.00",
    },
    {
      name: "Cheese Corn Sandwich",
      description: "Cheese sandwich with corn filling",
      price: "159.00",
      discountedPrice: "175.00",
    },
    {
      name: "Veg Cheese Sandwich",
      description: "Cheese sandwich with fresh veggies",
      price: "159.00",
      discountedPrice: "175.00",
    },
    {
      name: "Paneer Schezwan Sandwich",
      description: "Spicy paneer sandwich with Schezwan sauce",
      price: "179.00",
      discountedPrice: "197.00",
    },
    {
      name: "Peri Peri Paneer Sandwich",
      description: "Paneer sandwich with peri peri spices",
      price: "179.00",
      discountedPrice: "197.00",
    },
    {
      name: "Exotic Veg Sandwich",
      description: "Loaded with exotic veggies",
      price: "189.00",
      discountedPrice: "208.00",
    },
    {
      name: "Kitkat Waffle Stick",
      description: "Waffle stick topped with Kitkat",
      price: "135.00",
      discountedPrice: "149.00",
    },
    {
      name: "Oreo Waffle Stick",
      description: "Waffle stick with Oreo topping",
      price: "135.00",
      discountedPrice: "149.00",
    },
    {
      name: "Triple Chocolate Waffle Stick",
      description: "Rich chocolate waffle stick",
      price: "145.00",
      discountedPrice: "160.00",
    },
    {
      name: "Brownie Waffle Stick",
      description: "Topped with brownie pieces",
      price: "155.00",
      discountedPrice: "171.00",
    },
    {
      name: "Butterscotch Crunch Waffle Stick",
      description: "Butterscotch flavored waffle stick",
      price: "159.00",
      discountedPrice: "175.00",
    },
    {
      name: "Coffee Mocha Waffle Stick",
      description: "Coffee-infused waffle stick",
      price: "159.00",
      discountedPrice: "175.00",
    },
    {
      name: "Nutella Waffle Stick",
      description: "Waffle stick with Nutella topping",
      price: "159.00",
      discountedPrice: "175.00",
    },
    {
      name: "Hazelnut Waffle Stick",
      description: "Hazelnut-flavored waffle stick",
      price: "179.00",
      discountedPrice: "197.00",
    },
    {
      name: "Biscoff Caramel Waffle Stick",
      description: "Topped with Biscoff and caramel",
      price: "189.00",
      discountedPrice: "208.00",
    },
    {
      name: "Rocher Waffle Stick",
      description: "Ferrero Rocher-inspired topping",
      price: "199.00",
      discountedPrice: "219.00",
    },
  ],
  extras: [
    {
      name: "Espresso Shot",
      description: "Add an extra espresso shot",
      price: "35.00",
      discountedPrice: "39.00",
    },
    {
      name: "Any Syrup",
      description: "Add your favorite syrup flavor",
      price: "35.00",
      discountedPrice: "39.00",
    },
    {
      name: "Ice Cream Scoop",
      description: "Vanilla ice cream scoop",
      price: "35.00",
      discountedPrice: "39.00",
    },
    {
      name: "Cheese Slice",
      description: "Add a slice of cheese",
      price: "29.00",
      discountedPrice: "32.00",
    },
  ],
};

export default function Component() {
  const [activeTab, setActiveTab] = useState("hot-coffee");

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-[#F5F5F5]">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-[#A1824A]">
          {"Sip N' Unwind"}
        </h1>
        <p className="text-amber-950 font-semibold">Cafe & Restaurant</p>
      </div>

      <div className="w-full ">
        <div className="rounded-lg bg-[#DFCEA0] mb-4 ">
          <div className="flex rounded-lg overflow-x-scroll scrollbar-visible">
            {Object.entries({
              "hot-coffee": { icon: Coffee, label: "Hot Coffee" },
              "cold-drinks": { icon: IceCream, label: "Cold Drinks" },
              food: { icon: Sandwich, label: "Food" },
              extras: { icon: Plus, label: "Add Ons" },
            }).map(([key, { icon: Icon, label }]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center font-medium px-4 py-2 ${
                  activeTab === key
                    ? "bg-[#A1824A] text-white"
                    : "text-amber-950 "
                } rounded-lg transition-colors duration-200 flex-shrink-0`}
              >
                <Icon
                  className={`mr-2 h-4 w-4 duration-200 ease-linear ${
                    activeTab === key ? "h-6 w-6" : ""
                  }`}
                />
                {label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "hot-coffee" && (
          <MenuSection title="Hot Coffee" items={menuItems["hot-coffee"]} />
        )}
        {activeTab === "cold-drinks" && (
          <MenuSection title="Cold Drinks" items={menuItems["cold-drinks"]} />
        )}
        {activeTab === "food" && (
          <>
            <MenuSection
              title="Sandwiches"
              items={menuItems["food"].filter((item) =>
                item.name.includes("Sandwich"),
              )}
            />
            <MenuSection
              title="Waffle Sticks"
              items={menuItems["food"].filter((item) =>
                item.name.includes("Waffle Stick"),
              )}
            />
          </>
        )}
        {activeTab === "extras" && (
          <MenuSection title="Add Ons" items={menuItems["extras"]} />
        )}

        <AllergyWarning />
      </div>
    </div>
  );
}

interface MenuSectionProps {
  title: string;
  items: MenuItemProps[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ items }) => (
  <div className="mb-4 bg-[#DFCEA0] rounded-lg shadow">
    {/* <div className="px-4 py-5 border-b border-[#A1824A]">
      <h3 className="text-lg font-medium text-[#A1824A]">{title}</h3>
    </div> */}
    <div className="px-4 py-5">
      <div className="grid gap-4">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  </div>
);

const MenuItem: React.FC<MenuItemProps> = ({
  name,
  description,
  price,
  discountedPrice,
}) => (
  <div className="flex items-center justify-between gap-4 text-amber-950">
    <div>
      <div className="font-medium text-lg ">{name}</div>
      {description && <div className="text-sm opacity-80">{description}</div>}
    </div>
    <div className="text-right">
      <div className="font-medium ">₹{price}</div>
      <div className="text-sm opacity-50 line-through">₹{discountedPrice}</div>
    </div>
  </div>
);

const AllergyWarning: React.FC = () => (
  <div className="bg-[#DFCEA0] border-l-4 border-[#A1824A] text-amber-950 p-4 mt-4 rounded-lg">
    <div className="flex items-center">
      <AlertTriangle className="h-4 w-4 mr-2" />
      <h3 className="font-bold">Allergen Information</h3>
    </div>
    <p className="mt-2">
      Our products may contain dairy, nuts, gluten, and other allergens. Please
      inform our staff about any allergies.
    </p>
  </div>
);
