import createFactory from "./createFactory";
import { setDisplayName, wrapDisplayName } from "./displayName";

const mapProps = (propsMapper) => (BaseComponent) => {
  const factory = createFactory(BaseComponent);
  const MapProps = (props) => factory(propsMapper(props));
  if (process.env.NODE_ENV !== "production") {
    return setDisplayName(wrapDisplayName(BaseComponent, "mapProps"))(MapProps);
  }
  return MapProps;
};

export default mapProps;
