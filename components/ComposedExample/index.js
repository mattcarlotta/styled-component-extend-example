import Base from "../Base";
import { compose, withProps } from "../../utils";

const StyledA = compose(
  withProps((props) => ({
    ...props,
    css: `
        padding: 20px;
        color: pink;
        border: 1px solid pink;
        border-radius: 4px;
        width: 20px;
      `,
    onClick: () => alert("hi"),
  }))
)(Base);

const StyledB = compose(
  withProps((props) => ({
    ...props,
    css: `
      padding: 20px;
      color: green;
      border: 1px solid green;
      border-radius: 4px;
      width: 30px;
    `,
    onClick: () => alert("bye"),
  }))
)(Base);

const ComposedExample = () => (
  <>
    <StyledA>Hi</StyledA>
    <br />
    <StyledB>Bye</StyledB>
  </>
);

export default ComposedExample;
