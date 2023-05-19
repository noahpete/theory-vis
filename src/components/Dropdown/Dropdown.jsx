import React, { useState } from "react";

const Dropdown = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");

  const handleAlgorithmChange = (event) => {
    setSelectedAlgorithm(event.target.value);
  };

  return (
    <div>
      <label htmlFor="algorithm">Algorithms:</label>
      <select
        id="algorithm"
        value={selectedAlgorithm}
        onChange={handleAlgorithmChange}
      >
        <option value="">Select an algorithm</option>
        <option value="naive">Naive</option>
        <option value="divideAndConquer">Divide and Conquer</option>
      </select>
    </div>
  );
};

export default Dropdown;
