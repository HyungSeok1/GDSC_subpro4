import React, { useState } from 'react';
import StartScreen from './StartScreen';
import Result from './Result';
import './App.css';

const questions = [
  '선호하시는 위치를 모두 선택해주세요!',
  '먹고 싶은 음식의 종류를 모두 선택해주세요!',
  '제외하고 싶은 음식을 모두 선택해주세요!',
  '음식의 가격대를 선택해주세요!',
  '식당은 방문하는 날을 선택해주세요!',
];

const options = [
  ['참살이길', '개운사길', '정문'],
  ['한식', '일식', '중식', '양식', '분식', '패스트푸드', '기타'],
  ['돼지', '소', '닭', '해산물'],
  ['만원 이하', '만원 초과'],
  ['월', '화', '수', '목', '금', '토', '일'],
];

var selectedOptionsArray = [];

function App() {
  const [isStart, setIsStart] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
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
    } else if (currentQuestion === 0) {
      setIsStart(true);
      window.location.reload();
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOptions((prevSelected) => {
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
    setIsComplete(true);
    // 각 질문의 선택된 옵션들을 반환
    selectedOptionsArray = selectedOptions.map((selection, index) => ({
      selectedOptions: Array.from(selection),
    }));
  };

  return (
    <div className="container">
      {isStart ? ( //isStart가 true일 때
        <StartScreen onStart={() => setIsStart(false)} />
      ) : isComplete ? (
        <Result result={selectedOptionsArray} /> //isComplete가 true일 때
      ) : (
        //isComplete가 false일 때
        <>
          <header className="header" onClick={() => window.location.reload()}>
            <h1>안밥</h1>
          </header>

          <main className="main-content">
            <h2>{questions[currentQuestion]}</h2>
            <div className="options">
              {options[currentQuestion].map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${
                    selectedOptions[currentQuestion].has(option)
                      ? 'selected'
                      : ''
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </main>
          <footer className="footer">
            <button className="nav-button-back" onClick={handleBack}>
              Back
            </button>
            <button className="nav-button-next" onClick={handleNext}>
              {currentQuestion === questions.length - 1 ? 'Complete' : 'Next'}
            </button>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
