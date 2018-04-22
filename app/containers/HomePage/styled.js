import styled from 'styled-components';

const WrapperTimer = styled.div`
  position: relative;
  font-size: 300px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #cccccc;
  box-sizing: content-box;

  &::after {
    position: absolute;
    top: 0.025em;
    left: 0.025em;
    display: block;
    content: ' ';
    border-radius: 50%;
    background-color: #f5f5f5;
    width: 0.95em;
    height: 0.95em;
    transition-property: all;
    transition-duration: 0.2s;
    transition-timing-function: ease-in;
  }
`;
const CliceTimer = styled.div`
  position: absolute;
  width: 1em;
  height: 1em;
  clip: ${({ theme }) =>
    theme.spin <= 180
      ? 'rect(0em, 1em, 1em, 0.5em)'
      : 'rect(auto, auto, auto, auto)'};
`;

const BarTimer = styled.div`
  position: absolute;
  border: 0.025em solid #307bbb;
  width: 0.95em;
  height: 0.95em;
  clip: rect(0em, 0.5em, 1em, 0em);
  border-radius: 50%;
  transform: rotate(10deg);
  transform: ${({ theme }) => `rotate(${theme.spin}deg)`};
`;
const FillTimer = BarTimer.extend`
  transform: rotate(0deg);
  transform: ${({ theme }) =>
    theme.spin <= 180 ? 'rotate(0deg)' : 'rotate(180deg)'};
`;

const InputTime = styled.input`
  position: absolute;
  width: calc(100% - 1em);
  margin: 0 0.5em;
  z-index: 1;
  top: calc(50% - 0.85em);
  font-size: 0.15em;
  color: black;
  display: block;
  text-align: center;
  white-space: nowrap;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;

  border-bottom: 1px solid black;
  outline: none;

  &:focus {
    border-bottom-color: blue;
  }
`;

export { WrapperTimer, CliceTimer, BarTimer, FillTimer, InputTime };
