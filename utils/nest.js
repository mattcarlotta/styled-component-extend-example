import createFactory from "./createFactory";
import { getDisplayName } from "./displayName";

const nest = (...Components) => {
  const factories = Components.map(createFactory);
  const Nest = ({ children, ...props }) =>
    factories.reduceRight((child, factory) => factory(props, child), children);

  if (process.env.NODE_ENV !== "production") {
    const displayNames = Components.map(getDisplayName);
    Nest.displayName = `nest(${displayNames.join(", ")})`;
  }

  return Nest;
};

export default nest;
