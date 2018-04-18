import styled from 'styled-components';

const WrapperTimer = styled.div`
  position: relative;
  font-size: 120px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin: 0 0.1em 0.1em 0;
  background-color: #cccccc;
  box-sizing: content-box;

  &::after {
    position: absolute;
    top: 0.08em;
    left: 0.08em;
    display: block;
    content: ' ';
    border-radius: 50%;
    background-color: #f5f5f5;
    width: 0.84em;
    height: 0.84em;
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
  border: 0.08em solid #307bbb;
  width: 0.84em;
  height: 0.84em;
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
  width: 100%;
  z-index: 1;
  left: 0;
  top: 0;
  width: 5em;
  line-height: 5em;
  font-size: 0.2em;
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
