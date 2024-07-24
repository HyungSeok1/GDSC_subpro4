import './Result.css';
import rl from './reslist.jsx';

const select = (res) => {
  var test = rl.filter(
    (x) =>
      res.result[0].selectedOptions.includes(x[1]) &&
      res.result[1].selectedOptions.includes(x[2]) &&
      !res.result[2].selectedOptions.filter((z) => x[3].includes(z)).length &&
      res.result[3].selectedOptions.includes(x[4]) &&
      !res.result[4].selectedOptions.filter((z) => x[5].includes(z)).length
  );
  return test;
};

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

function Result(result) {
  console.log('각 질문의 선택된 옵션들:', result);
  // console.log(select(result));
  // console.log(result.result[0].selectedOptions);
  var res = select(result);
  shuffle(res);

  return (
    <div className="container">
      <header className="header">
        <h1>
          <span onClick={() => window.location.reload()}>
            안밥
          </span>
        </h1>
      </header>
      <main>
        <h2>
          {res.length
            ? '조건에 맞는 식당을 찾았어요!'
            : '조건에 맞는 식당을 찾지 못했어요 :('}
        </h2>
        <div>
          {res.slice(0, 5).map((x) => (
            <div className="restaurant">
              <p>{x[0]}</p>
              <a href={x[6]}>네이버지도에서 보기</a>
            </div>
          ))}
        </div>
      </main>
      <button className="start-button" onClick={() => window.location.reload()}>
        다시하기
      </button>
    </div>
  );
}

export default Result;