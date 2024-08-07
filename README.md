# 안밥: 안암 밥집 추천 서비스

안밥은 사용자 맞춤형 음식점 추천 서비스입니다. 사용자가 원하는 조건을 선택하면, 해당 조건에 맞는 음식점을 결과 화면에서 출력합니다.

음식점은 참살이길, 개운사길, 정문 지역만 포함.

## 주요 기능

1. **질문 기반 음식점 추천**: 
    - 사용자는 선호 위치, 음식 종류, 제외할 음식, 가격대, 방문 날짜 등의 질문에 답합니다.
    - 각 질문에 대해 여러 옵션을 선택할 수 있습니다.

2. **선택지 기반 필터링**:
    - 사용자가 선택한 조건을 바탕으로 데이터에 저장된 음식점 리스트에서 필터링합니다.
    - 선택한 조건에 맞는 음식점만 결과로 보여줍니다.
    - 조건에 맞는 음식점이 없다면 '조건에 맞는 식당을 찾지 못했어요 :('를 화면에 출력합니다.

3. **결과 화면**:
    - 조건에 맞는 음식점들이 리스트 형태로 제공됩니다.
    - 각 음식점의 이름과 네이버 지도 링크가 제공되어 사용자가 쉽게 위치를 확인할 수 있습니다.

4. **다시하기**:
    - 결과 화면에서 다시하기 버튼, 혹은 헤더 클릭을 통해 처음 질문 화면으로 돌아갈 수 있습니다.
    - 모든 선택된 옵션은 돌아가는 과정에서 초기화됩니다.

## 사용 기술

- **React**
- **CSS**
- **JavaScript**
