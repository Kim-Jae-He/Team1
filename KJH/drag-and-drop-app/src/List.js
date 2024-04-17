// src/List.js
import React, { useState } from 'react';
import './List.css';

const List = () => {
  const [items, setItems] = useState([
    { id: 1, text: '아이템 1' },
    { id: 2, text: '아이템 2' },
    { id: 3, text: '아이템 3' },
  ]);

  // 아이템을 드래그할 때 호출되는 함수
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
  };

  // 드래그된 아이템을 새 위치로 이동시키는 함수
  const handleDragOver = (e, index) => {
    e.preventDefault(); // 기본 동작 방지

    const draggedIndex = parseInt(e.dataTransfer.getData('index'));

    // 아이템의 새로운 배열 생성
    const newItems = [...items];

    // 드래그된 아이템을 원래 위치에서 제거
    const draggedItem = newItems.splice(draggedIndex, 1)[0];

    // 드래그된 아이템을 새 위치에 삽입
    newItems.splice(index, 0, draggedItem);

    // 상태 업데이트로 아이템 순서 변경
    setItems(newItems);
  };

  // 아이템을 드롭했을 때 호출되는 함수
  const handleDrop = (e, index) => {
    e.preventDefault(); // 기본 동작 방지

    // 드래그된 아이템의 인덱스 가져오기
    const draggedIndex = parseInt(e.dataTransfer.getData('index'));

    // 아이템이 특정 위치에 드롭되었는지 확인 (예: index === 0)
    if (index === 0) {
      // 특정 위치에 아이템이 드롭되면 알림 표시
      alert('아이템이 특정 위치에 드롭되었습니다!');
    }
  };

  // 드래그가 종료될 때 호출되는 함수
  const handleDragEnd = () => {
    // 필요한 경우 드래깅 데이터 초기화
  };

  return (
    <div className="list-container">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="list-item"
          draggable
          onDragStart={e => handleDragStart(e, index)}
          onDragOver={e => handleDragOver(e, index)}
          onDrop={e => handleDrop(e, index)}
          onDragEnd={handleDragEnd}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default List;
