import React from "react";
import "../index.css"

// Définition des propriétés du bouton
type ButtonProps = {
  children: React.ReactNode; // ce qu’on mettra à l’intérieur du bouton
  onClick?: () => void;      
  variant?: "primary" | "danger" | "success"; 
  disabled?: boolean;        
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  // les styles de base
  let baseStyle =
    "px-3 py-1 rounded font-semibold transition-colors duration-200";

  // Styles selon le variant
  let variantStyle = "";
  switch (variant) {
    case "primary":
      variantStyle = "bg-blue-500 text-white hover:bg-blue-600";
      break;
    case "danger":
      variantStyle = "bg-red-500 text-white hover:bg-red-600";
      break;
    case "success":
      variantStyle = "bg-green-500 text-white hover:bg-green-600";
      break;
  }

  return (
    <input
    type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyle} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      value={`${children}`}
    />
  );
}
