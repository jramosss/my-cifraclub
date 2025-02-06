import React, { RefObject, useRef, useState } from "react"
import Draggable, { DraggableData, DraggableEvent } from "react-draggable"

const DraggableChord = ({
  chord,
  draggable = true,
}: {
  chord: string
  draggable?: boolean
}) => {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleStop = (e: DraggableEvent, data: DraggableData) => {
    const chordBox = document.getElementById("chords-box")!
    const chordLines = document.querySelectorAll("[id^='chord-line-']")
    const chordBoxRect = chordBox.getBoundingClientRect()

    let closestLine: HTMLElement | null = null
    let minDistance = Infinity

    const mouseY = data.y + chordBoxRect.top

    chordLines.forEach((line) => {
      const lineRect = (line as HTMLElement).getBoundingClientRect()
      const distance = Math.abs(mouseY - lineRect.top)

      if (distance < minDistance) {
        minDistance = distance
        closestLine = line as HTMLElement
      }
    })

    if (closestLine) {
      const lineRect = (closestLine as HTMLElement).getBoundingClientRect()
      const newX = Math.max(
        lineRect.left,
        Math.min(data.x + chordBoxRect.left, lineRect.right)
      )

      setPosition({
        x: newX - chordBoxRect.left,
        y:
          lineRect.top +
          lineRect.height / 2 -
          (chordBoxRect.top + data.node.offsetHeight / 2),
      })
    }
  }

  return (
    <Draggable
      nodeRef={ref as unknown as RefObject<HTMLElement>}
      disabled={!draggable}
      onStop={handleStop}
      defaultPosition={position}
      position={position}
    >
      <div
        className="border-2 rounded-lg border-gray-200 border-solid hover:bg-gray-200 cursor-pointer box-border"
        ref={ref}
        style={{ padding: "0.25rem" }}
      >
        {chord}
      </div>
    </Draggable>
  )
}

export default function Chord({
  chord,
  draggable = false,
}: {
  chord: string
  draggable?: boolean
}) {
  return (
    <div className="">
      <DraggableChord chord={chord} draggable={draggable} />
    </div>
  )
}
