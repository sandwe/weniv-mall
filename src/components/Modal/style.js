import styled from "styled-components";

export const Container = styled.section`
  max-width: 990px;
  width: 100%;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid blue;
`;

export const CloseBtn = styled.button`
  width: 22px;
  height: 22px;
  border: none;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid green;
`;
