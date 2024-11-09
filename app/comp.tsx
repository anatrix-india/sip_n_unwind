import React, { useState } from "react";

export function Tabs({ children, defaultValue }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const updatedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { activeTab, setActiveTab });
    }
    return child;
  });

  return <div>{updatedChildren}</div>;
}

export function TabsList({ children }) {
  return <div className="flex space-x-2 mb-4">{children}</div>;
}

export function TabsTrigger({ children, value, activeTab, setActiveTab }) {
  return (
    <button
      className={`px-3 py-2 rounded-md ${activeTab === value ? "bg-gray-200" : "bg-white"}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, value, activeTab }) {
  if (value !== activeTab) return null;
  return <div>{children}</div>;
}

export function ScrollArea({ children }) {
  return <div className="overflow-auto">{children}</div>;
}

export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white shadow rounded-lg ${className}`}>{children}</div>
  );
}

export function CardHeader({ children }) {
  return (
    <div className="px-4 py-5 border-b border-gray-200 sm:px-6">{children}</div>
  );
}

export function CardContent({ children }) {
  return <div className="px-4 py-5 sm:p-6">{children}</div>;
}

export function CardTitle({ children }) {
  return (
    <h3 className="text-lg leading-6 font-medium text-gray-900">{children}</h3>
  );
}

export function Alert({ children, className = "" }) {
  return (
    <div
      className={`bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 ${className}`}
    >
      {children}
    </div>
  );
}

export function AlertTitle({ children }) {
  return <h3 className="font-bold">{children}</h3>;
}

export function AlertDescription({ children }) {
  return <p>{children}</p>;
}
