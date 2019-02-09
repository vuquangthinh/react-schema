import React, { Fragment } from 'react';

function compileJson(dom, typeSupports = {}, UnsupportType = null) {
  const createElement = ({ type, props }) => {
    if (typeSupports[type]) {
      const UIView = typeSupports[type];
      const { children, ...rest } = props;
      if (Array.isArray(children)) {
        return React.createElement(UIView, rest, children.map(createElement));
      }

      return React.createElement(UIView, rest, children);
    }

    return React.createElement(UnsupportType, {
      type,
      props
    });
  };

  if (Array.isArray(dom)) {
    return React.createElement(Fragment, null, dom.map(createElement));
  }

  return createElement(dom);
}

export default compileJson;