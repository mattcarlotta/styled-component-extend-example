import styled from "styled-components";

const Base = styled.div`
  cursor: pointer;
  touch-action: none;
  ${({ css }) => css};
`;

export default Base;
