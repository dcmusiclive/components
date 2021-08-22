import React, { useState } from "react";
import { PillTray } from "../components";

export const usePillTray = ({ pills }) => {
  const [activePills, setActivePills] = useState([]);

  const toggleActivePill = (pill) => {
    const pillSet = new Set([...activePills]);
    if (pillSet.has(pill)) {
      pillSet.delete(pill);
    } else {
      pillSet.add(pill);
    }
    setActivePills([...pillSet]);
  };

  return {
    activePills,
    renderPillTray: () => (
      <PillTray
        pills={pills}
        activePill={activePills}
        toggleActivePill={toggleActivePill}
      />
    ),
  };
};
