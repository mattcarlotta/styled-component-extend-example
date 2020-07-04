import Base from "../Base";
import { compose, displayName, withProps, withStyles } from "../../utils";

const { setDisplayName } = displayName;

const StyledA = compose(
  setDisplayName("Composed Styled A"),
  withProps((props) => ({
    ...props,
    onClick: () => alert("hi"),
  })),
  withStyles(`
    padding: 20px;
    color: pink;
    border: 1px solid pink;
    border-radius: 4px;
    width: 20px;
  `)
)(Base);

const StyledB = compose(
  setDisplayName("Composed Styled B"),
  withProps((props) => ({
    ...props,
    onClick: () => alert("bye"),
  })),
  withStyles(`
    padding: 20px;
    color: green;
    border: 1px solid green;
    border-radius: 4px;
    width: 30px;
  `)
)(Base);

const RestyledA = compose(
  setDisplayName("Recomposed Restyled A"),
  withProps((props) => ({
    ...props,
    onClick: () => alert("bye"),
  })),
  withStyles(`
    color: green;
    border-color: green;
  `)
)(StyledA);

const ComposedExample = () => (
  <>
    <StyledA>Hi</StyledA>
    <br />
    <RestyledA>Hi</RestyledA>
    <br />
    <StyledB>Bye</StyledB>
  </>
);

export default ComposedExample;
