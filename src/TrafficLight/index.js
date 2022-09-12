import React, { useCallback, useEffect, useState } from "react"

import * as Styled from "./styled"

let delay = 1000
const countdown = 7

export const TrafficLight = () => {
  const [startTime, setStartTime] = useState()
  const [otherState, setOtherState] = useState(0)

  const timeOutCallback = useCallback(
    () => setStartTime((currentTime) => currentTime - 1),
    []
  )

  useEffect(() => {
    console.log("Set Effect")
    if (startTime > 0) {
      setTimeout(timeOutCallback, delay)
    }
  }, [startTime, timeOutCallback])

  return (
    <Styled.MainDiv>
      <Styled.LightsDiv>
        <Styled.Red startTime={startTime} />
        <Styled.Green startTime={startTime}>
          {startTime === null || startTime === 0 ? "" : startTime}
        </Styled.Green>
      </Styled.LightsDiv>

      <Styled.Button
        onClick={() => (startTime > 0 ? null : setStartTime(countdown))}
      >
        Start
      </Styled.Button>
      <Styled.Button
        onClick={() => setOtherState((otherState) => otherState + 1)}
      >
        MStart {otherState}
      </Styled.Button>
    </Styled.MainDiv>
  )
}
