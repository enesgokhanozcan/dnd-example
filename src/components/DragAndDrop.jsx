import React, { useState } from "react";
import ContainerCards from "./ContainerCards";

const typesHero = ["Tasks", "InProcess", "Done"];
const data = [
  {
    id: 1,
    content: "First Task",
    status: "Tasks",
  },
  {
    id: 2,
    content: "Second Task",
    status: "InProcess",
  },
  {
    id: 3,
    content: "Third Task",
    status: "Done",
  },
  {
    id: 4,
    content: "Fourth Task",
    status: "Done",
  },
];

export default function DragAndDrop() {
  const [isDragging, setIsDragging] = useState(false);
  const [listItems, setListItems] = useState(data);

  const handleDragging = (dragging) => setIsDragging(dragging);
  const handleUpdateList = (id, status) => {

    let card = listItems.find(item => item.id === id)

    if (card && card.status !== status) {

        card.status = status

        setListItems( prev => ([
          card,
             ...prev.filter(item => item.id !== id)
         ]))
    }
}
  return (
    <>
      <div className="grid">
        {typesHero.map((container) => (
          <ContainerCards
            status={container}
            key={container}
            items={listItems}
            isDragging={isDragging}
            handleDragging={handleDragging}
            handleUpdateList={handleUpdateList}
          />
        ))}
      </div>
    </>
  );
}
