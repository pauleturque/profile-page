import React, { useState, useEffect } from "react";
import "./BlueProgressBar.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const BlueProgressBar = () => {
  const [steps, setSteps] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [completedSteps, setCompletedSteps] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    const newProgressPercentage = (completedSteps / (steps.length - 1)) * 100;
    setProgressPercentage(newProgressPercentage);
  }, [completedSteps]);

  const handleClickStep = (stepIndex) => {
    const updatedSteps = [...steps];
    updatedSteps[stepIndex] = true;
    setSteps(updatedSteps);
    const newCompletedSteps = updatedSteps.filter((step) => step).length;
    setCompletedSteps(newCompletedSteps);

    const currentDate = new Date();
    const dateString = currentDate.toISOString();
    sessionStorage.setItem(`step-${stepIndex}`, dateString);
  };

  const resetProgressBar = () => {
    setSteps(steps.map(() => false));
    setHoveredStep(null);
    sessionStorage.clear();
    setCompletedSteps(0);
  };

  return (
    <ProgressBar filledBackground="#3b5998" percent={progressPercentage}>
      {steps.map((step, index) => (
        <Step key={index} transition="scale">
          {({ accomplished }) => (
            <div
              className={`transitionStep ${
                accomplished ? "accomplished" : null
              }`}
              onClick={() => {
                if (index === 6 && completedSteps === steps.length - 1) {
                  resetProgressBar();
                } else if (index <= completedSteps) {
                  handleClickStep(index);
                }
              }}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="circle" />
              {hoveredStep === index && (
                <div className="dateTooltip">
                  {sessionStorage.getItem(`step-${index}`)}
                </div>
              )}
            </div>
          )}
        </Step>
      ))}
    </ProgressBar>
  );
};

export default BlueProgressBar;
