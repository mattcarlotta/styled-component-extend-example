import styled from "styled-components";
import { setDisplayName, wrapDisplayName } from "./displayName";

const withStyles = (css) => (BaseComponent) =>
  setDisplayName(wrapDisplayName(BaseComponent, "withStyles"))(
    styled(BaseComponent)`
      ${() => css};
    `
  );

export default withStyles;
