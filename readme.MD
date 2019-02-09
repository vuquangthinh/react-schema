


Example:

```
import React from 'react';
import reactSchema from 'react-schema';


class Foo extends React.Component {
  render() {
    return reactSchema({
      type: 'div',
      props: {
        children: [
          {
            type: 'a',
            props: {
              href: '#',
              children: 'Hello'
            }
          }
        ]
      }
    }, {
      div: props => <div {...props} />,
      a: props => <a {...props} />,
    }, ({ type, props }) => (
      <div>{type} {JSON.stringify(props)}</div>
    ));
  }
}

```