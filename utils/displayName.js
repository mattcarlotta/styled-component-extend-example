const getDisplayName = (Component) => {
  if (typeof Component === "string") {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || "Component";
};

const setStatic = (key, value) => (BaseComponent) => {
  /* eslint-disable no-param-reassign */
  BaseComponent[key] = value;
  /* eslint-enable no-param-reassign */
  return BaseComponent;
};

const setDisplayName = (displayName) => setStatic("displayName", displayName);

const wrapDisplayName = (BaseComponent, hocName) =>
  `${hocName}(${getDisplayName(BaseComponent)})`;

export { getDisplayName, setDisplayName, wrapDisplayName };
