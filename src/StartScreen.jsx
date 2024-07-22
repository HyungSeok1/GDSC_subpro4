import React from 'react';
import './StartScreen.css';

function StartScreen({ onStart }) {
  return (
    <div className="start-container">
      <div className="start-content">
        <div className="subtitle">안암 밥집 추천 서비스</div>
        <div className="title">안밥</div>
        <button className="start-button" onClick={onStart}>시작하기</button>
      </div>
    </div>
  );
}

export default StartScreen;
