import React, { ChangeEvent } from 'react';

interface RangeInputProps {
  min: number;
  max: number;
  step: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RangeInput: React.FC<RangeInputProps> = ({ min, max, step, onChange }) => {
  return (
    <div className="flex items-center">
      <span>{min}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        className="w-full mr-3"
      />
      <span className="ml-auto">{max}</span>
    </div>
  );
};

export default RangeInput;
