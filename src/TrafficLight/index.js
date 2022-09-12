import React, { useEffect, useState } from "react"

import * as Styled from "./styled"

let INITIALINTERVAL = 1000

export const TrafficLight = () => {
  const [startTime, setStartTime] = useState(7)
  const [isStarted, setIsStarted] = useState(false)

  useEffect(() => {
    if (startTime === 0) {
      const initialStatesId = setTimeout(() => {
        setIsStarted(false)
        setStartTime(7)
      }, INITIALINTERVAL)

      return () => {
        clearTimeout(initialStatesId)
      }
    }
    if (isStarted === true && startTime !== 0) {
      const timerId = setTimeout(() => {
        setStartTime(startTime - 1)
      }, INITIALINTERVAL)

      return () => {
        clearTimeout(timerId)
      }
    }
  })

  return (
    <Styled.MainDiv>
      <Styled.LightsDiv>
        <Styled.Red isStarted={isStarted} />
        <Styled.Green isStarted={isStarted}>
          {startTime === 7 ? "" : startTime}
        </Styled.Green>
      </Styled.LightsDiv>

      <Styled.Button onClick={() => setIsStarted(true)}>Start</Styled.Button>
    </Styled.MainDiv>
  )
}
