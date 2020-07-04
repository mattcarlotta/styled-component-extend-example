import styled, { css } from "styled-components";
import Base from "../Base";

const mixin = css`
  color: ${(props) => (props.white ? "white" : "black")};
  background: ${(props) => (props.white ? "black" : "white")};
`;

const Button3 = styled(Base)`
  ${(props) => (props.complex ? mixin : "color: black;")};
  width: 100px;
  border-radius: 10px;
  text-align: center;
`;

export default Button3;
