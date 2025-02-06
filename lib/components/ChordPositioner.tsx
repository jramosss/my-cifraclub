type ChordPositionerProps = {
  lyrics: string
}

export default function ChordPositioner({ lyrics }: ChordPositionerProps) {
  const lineByLineLyrics = lyrics.split("\n")

  return (
    <div className="rounded-lg border-solid flex flex-col border-2 w-full p-4 resize-none">
      {lineByLineLyrics.map((line, index) => {
        return (
          <div
            id={`line-${index}`}
            className="flex flex-col gap-2 w-full"
            key={"line-" + index}
          >
            <div
              id={`chord-line-${index}`}
              className="flex gap-2 border-2 border-orange-500 border-solid p-4"
            />
            <div id={`lyric-line-${index}`} className="flex gap-2">
              {line}
            </div>
          </div>
        )
      })}
    </div>
  )
}
