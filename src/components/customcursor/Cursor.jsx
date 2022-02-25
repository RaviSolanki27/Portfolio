import React, { useEffect, useRef } from "react";
import "./cursor.css"

function Cursor() {
    useEffect(()=>{
        document.addEventListener('mousemove', (event) => {
            const {clientX , clientY} = event;
            const mouseX = clientX - cursorref.current.clientWidth/2;
            const mouseY = clientY - cursorref.current.clientHeight/2;
            cursorref.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        })
        document.addEventListener('mousedown', () => {
            cursorref.current.style.backgroundColor = `rgb(52, 221, 221, 1)`;
        })
        document.addEventListener('mouseup', () => {
            cursorref.current.style.backgroundColor = `rgb(52, 221, 221, 0.3)`;
        })
    })
    const cursorref = useRef(null);
  return <div className="app-cursor" ref={cursorref}></div>;
}

export default Cursor;
