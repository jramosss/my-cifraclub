"use client"
import { useState } from "react"
import ChordsBox from "../../lib/components/ChordsBox"
import ChordPositioner from "../../lib/components/ChordPositioner"

export default function New() {
  const [lyrics, setLyrics] = useState<string>("")
  // First step: Add title, artist, chords and lyrics
  const [firstStepDone, setFirstStepDone] = useState<boolean>(false)
  // Second step: position chords in the lyrics
  const [secondStepDone, setSecondStepDone] = useState<boolean>(false)

  return (
    <main className="flex flex-col items-center h-screen w-full">
      <div className="mt-20 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <input
            className="text-4xl font-bold text-black border-none"
            type="text"
            placeholder="Song name"
            disabled={firstStepDone}
          />
          <input
            className="text-lg font-semibold text-gray-600"
            type="text"
            placeholder="Artist"
            disabled={firstStepDone}
          />
        </div>
        <>
          <ChordsBox canEnterNewChords={!firstStepDone} />
        </>
        <div className="w-full flex">
          {!firstStepDone ? (
            <textarea
              className="border-gray-200 rounded-lg border-solid flex border-2 w-full h-96 p-4 resize-none overflow-y-scroll"
              placeholder="Lyrics here..."
              onChange={(e) => setLyrics(e.target.value)}
              value={lyrics}
              disabled={firstStepDone}
              id="lyrics-box"
            />
          ) : (
            <ChordPositioner lyrics={lyrics} />
          )}
        </div>
        <div className="flex justify-end gap-2">
          <button
            className="btn border-black border-2 flex justify-center w-fit p-2"
            onClick={() => {
              if (!firstStepDone) {
                setFirstStepDone(true)
              } else if (!secondStepDone) {
                setSecondStepDone(true)
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
    </main>
  )
}
