"use client";

import React from "react";

const Odontogram = ({ selectedTeeth, onToothClick }) => {
  const getToothPath = (type) => {
    switch (type) {
      case "molar":
        return "M-15,-20 C-5,-22 5,-22 15,-20 L18,0 C15,20 5,22 0,22 C-5,22 -15,20 -18,0 Z";
      case "premolar":
        return "M-12,-18 C-4,-20 4,-20 12,-18 L14,0 C12,18 4,20 0,20 C-4,20 -12,18 -14,0 Z";
      case "canine":
        return "M-10,-20 C-3,-25 3,-25 10,-20 L12,0 C10,20 3,22 0,22 C-3,22 -10,20 -12,0 Z";
      case "incisor":
        return "M-8,-18 C-3,-20 3,-20 8,-18 L10,0 C8,18 3,20 0,20 C-3,20 -8,18 -10,0 Z";
      default:
        return "";
    }
  };

  const teeth = [
    // Upper right
    { number: 18, textX: -35, toothY:-10, x: 50, y: 100, rotation: -70, type: "molar" },
    { number: 17, textX: -35, toothY:-20, x: 70, y: 80, rotation: -60, type: "molar" },
    { number: 16, textX: -35, toothY:-20, x: 95, y: 60, rotation: -50, type: "molar" },
    { number: 15, textX: -35, toothY:-20, x: 120, y: 45, rotation: -40, type: "premolar" },
    { number: 14, textX: -35, toothY:-20, x: 145, y: 35, rotation: -30, type: "premolar" },
    { number: 13, textX: -35, toothY:-20, x: 170, y: 30, rotation: -20, type: "canine" },
    { number: 12, textX: -35, toothY:-20, x: 195, y: 23, rotation: -10, type: "incisor" },
    { number: 11, textX: -35, toothY:-20, x: 220, y: 21, rotation: -5, type: "incisor" },
    // Upper left
    { number: 21, x: 245, y: 21, rotation: 5, type: "incisor" },
    { number: 22, x: 270, y: 23, rotation: 10, type: "incisor" },
    { number: 23, x: 295, y: 30, rotation: 20, type: "canine" },
    { number: 24, x: 320, y: 35, rotation: 30, type: "premolar" },
    { number: 25, x: 345, y: 45, rotation: 40, type: "premolar" },
    { number: 26, x: 370, y: 60, rotation: 50, type: "molar" },
    { number: 27, x: 395, y: 80, rotation: 60, type: "molar" },
    { number: 28, x: 415, y: 100, rotation: 70, type: "molar" },
    // Lower left
    { number: 31, x: 245, y: 255, rotation: -5, type: "incisor" },
    { number: 32, x: 270, y: 253, rotation: -10, type: "incisor" },
    { number: 33, x: 295, y: 250, rotation: -20, type: "canine" },
    { number: 34, x: 320, y: 245, rotation: -30, type: "premolar" },
    { number: 35, x: 345, y: 235, rotation: -40, type: "premolar" },
    { number: 36, x: 370, y: 220, rotation: -50, type: "molar" },
    { number: 37, x: 395, y: 200, rotation: -60, type: "molar" },
    { number: 38, x: 415, y: 180, rotation: -70, type: "molar" },
    // Lower right
    { number: 48, x: 50, y: 180, rotation: 70, type: "molar" },
    { number: 47, x: 70, y: 200, rotation: 60, type: "molar" },
    { number: 46, x: 95, y: 220, rotation: 50, type: "molar" },
    { number: 45, x: 120, y: 235, rotation: 40, type: "premolar" },
    { number: 44, x: 145, y: 245, rotation: 30, type: "premolar" },
    { number: 43, x: 170, y: 250, rotation: 20, type: "canine" },
    { number: 42, x: 195, y: 253, rotation: 10, type: "incisor" },
    { number: 41, x: 220, y: 255, rotation: 5, type: "incisor" },
  ];

  return (
    <div className="p-4">
      <svg width="465" height="320" viewBox="0 0 465 320">
        {teeth.map((tooth) => (
          <g
            key={tooth.number}
            onClick={() => onToothClick(tooth.number)}
            style={{ cursor: "pointer" }}
            transform={`translate(${tooth.x}, ${tooth.y}) rotate(${tooth.rotation})`}
          >
            {/* Tooth outline */}
            <path
              d={getToothPath(tooth.type)}
              fill={selectedTeeth.includes(tooth.number) ? "#3b82f6" : "white"}
              stroke="#6b7280"
              strokeWidth="1.5"
            />
            {/* Tooth structure details */}
            <path
              d={
                tooth.type === "molar"
                  ? "M-15,-20 C-5,-5 5,-5 15,-20 M-18,0 C-6,5 6,5 18,0 M-15,20 C-5,5 5,5 15,20"
                  : tooth.type === "premolar"
                  ? "M-12,-18 C-4,-5 4,-5 12,-18 M-14,0 C-5,5 5,5 14,0 M-12,18 C-4,5 4,5 12,18"
                  : tooth.type === "canine"
                  ? "M-10,-20 C-3,-5 3,-5 10,-20 M-12,0 C-4,5 4,5 12,0"
                  : "M-8,-18 C-3,-5 3,-5 8,-18 M-10,0 C-3,5 3,5 10,0"
              }
              fill="none"
              stroke="#9ca3af"
              strokeWidth="1"
            />
            {/* Tooth number */}
            <text
              x={0}
              y={0}
              fontSize="10"
              textAnchor="middle"
              fill="#4b5563"
              transform={`rotate(${-tooth.rotation})`}
            >
              {tooth.number}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default Odontogram;
