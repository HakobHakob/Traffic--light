import styled from "styled-components"

export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
`

export const LightsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Light = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 10px;
`

export const Red = styled(Light)`
  background-color: ${({ startTime }) =>
    startTime === undefined || startTime === 0 ? "red" : "transparent"};
`
export const Green = styled(Light)`
  background-color: ${({ startTime }) =>
    startTime > 0 ?   "green" : "transparent"};
  font-size: 30px;
`

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  cursor: pointer;
  margin: 0 1em;
  padding: 1em 3em;
  &:hover {
    background: lightblue;
  }
`
