import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Draggable Item Component
const DraggableItem = ({ id, text }) => {
    const [, drag] = useDrag(() => ({
        type: "ITEM",
        item: { id, text },
    }));
    return (
        <div
            ref={drag}
            style={{
                padding: "8px",
                margin: "4px",
                backgroundColor: "#f0f0f0",
                
                cursor: "move",
            }}
        >
            {text}
        </div>
    );
};

// Board Component
const Board = ({ items, setItems, isTarget }) => {
    const [, drop] = useDrop(() => ({
        accept: "ITEM",
        drop: (item) => {
            if (isTarget) {
                setItems((prev) => [...prev, { id: item.id, text: item.text }]);
            }
        },
    }));

    return (
        <div
            ref={drop}
            style={{
                width: "300px",
                minHeight: "300px",
                padding: "16px",
                backgroundColor: "#e8e8e8",
                border: "2px dashed #bbb",
            }}
        >
            {items.map((item, index) => (
                <DraggableItem key={index} id={item.id} text={item.text} />
            ))}
        </div>
    );
};

// Main App
const DragAndDropClone = () => {
    const [boardOneItems] = useState([
        { id: 1, text: "Heading" },
        { id: 2, text: "Sub Heading" },
    ]);
    const [boardTwoItems, setBoardTwoItems] = useState([]);

    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <h3>Board One</h3>
                    <Board items={boardOneItems} setItems={() => { }} isTarget={false} />
                </div>
                <div>
                    <h3>Board Two</h3>
                    <Board items={boardTwoItems} setItems={setBoardTwoItems} isTarget={true} />
                </div>
            </div>
        </DndProvider>
    );
};

export default DragAndDropClone;
