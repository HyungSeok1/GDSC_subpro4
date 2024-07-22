import React, { useState } from 'react';
import StartScreen from './StartScreen';
import './App.css';

const questions = [
  "질문 1",
  "질문 2",
  "질문 3",
  "질문 4",
  "질문 5"
];

const options = [
  ["선택지 1", "선택지 2", "선택지 3"],
  ["선택지 1", "선택지 2", "선택지 3", "선택지 4"],
  ["선택지 1", "선택지 2"],
  ["선택지 1", "선택지 2", "선택지 3", "선택지 4", "선택지 5"],
  ["선택지 1", "선택지 2", "선택지 3", "선택지 4", "선택지 5", "선택지 6", "선택지 7"]
];

function App() {
  const [isStart, setIsStart] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill(new Set())
  );

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleComplete(); // 마지막 질문에서 Complete 버튼 클릭 시 호출
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOptions(prevSelected => {
      const updatedSelections = [...prevSelected];
      const currentSelection = new Set(updatedSelections[currentQuestion]);
      if (currentSelection.has(option)) {
        currentSelection.delete(option);
      } else {
        currentSelection.add(option);
      }
      updatedSelections[currentQuestion] = currentSelection;
      return updatedSelections;
    });
  };

  const handleComplete = () => {
    // 각 질문의 선택된 옵션들을 반환
    const selectedOptionsArray = selectedOptions.map((selection, index) => ({
      question: questions[index],
      selectedOptions: Array.from(selection)
    }));
    console.log("각 질문의 선택된 옵션들:", selectedOptionsArray);
    // 선택된 옵션들을 다른 컴포넌트로 전달하거나, 상태를 업데이트하여 다음 단계로 넘어갈 수 있습니다.
    // 예: sendToRecommendationScreen(selectedOptionsArray);
  };

  return (
    <div className="container">
      {isStart ? (
        <StartScreen onStart={() => setIsStart(false)} />
      ) : (
        <>
          <header className="header">
            <h1>안밥</h1>
          </header>
          <main className="main-content">
            <h2>{questions[currentQuestion]}</h2>
            <div className="options">
              {options[currentQuestion].map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${selectedOptions[currentQuestion].has(option) ? 'selected' : ''}`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </main>
          <footer className="footer">
            <button className="nav-button" onClick={handleBack}>Back</button>
            <button 
              className="nav-button" 
              onClick={handleNext}
            >
              {currentQuestion === questions.length - 1 ? 'Complete' : 'Next'}
            </button>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
