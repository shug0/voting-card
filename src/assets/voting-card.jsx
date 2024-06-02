import { useState } from "react";

const colors = [
  {
    label: "Vert",
    code: "#27ae60",
  },
  {
    label: "Jaune",
    code: "#f1c40f",
  },
  {
    label: "Rouge",
    code: "#e74c3c",
  },
];

export function VotingCard() {
  const [color, setColor] = useState(colors[0].code);

  const handleSwitchColor = () => {
    const currentIndex = colors.findIndex((c) => c.code === color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex].code);
  };

  return (
    <article
      onClick={handleSwitchColor}
      className="h-full w-full rounded-3xl"
      style={{ backgroundColor: color }}
    ></article>
  );
}
