import { useRef } from "react"


export default function Start({setUsername}) {
    const inputRef = useRef();

    function handleClick(){
        inputRef.current.value && setUsername(inputRef.current.value)
    }

  return (
    <div className="start">
        <input type="text" className="startInput" placeholder="Enter your name..." ref={inputRef}/>
        <button className="startButton" onClick={handleClick}>Play</button>
    </div>
  )
}
