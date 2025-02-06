import { useState } from "react"
import Chord from "./Chord"

type ChordsBoxProps = {
  canEnterNewChords: boolean
}

export default function ChordsBox({ canEnterNewChords }: ChordsBoxProps) {
  const [chords, setChords] = useState<string[]>([])
  const [currentChord, setCurrentChord] = useState<string>("")

  return (
    <div className="flex flex-col gap-2">
      {canEnterNewChords && (
        <>
          <label htmlFor="chords">Write the song chords here</label>
          <input
            className="border-2"
            id="chords"
            onChange={(e) => setCurrentChord(e.target.value)}
            value={currentChord}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setChords([...chords, currentChord])
                setCurrentChord("")
              }
            }}
          />
        </>
      )}
      <div className="flex flex-wrap gap-2 max-w-[500px]" id="chords-box">
        {chords.map((chord, index) => (
          <Chord key={index} chord={chord} />
        ))}
      </div>
    </div>
  )
}
