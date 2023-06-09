```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

# create a modal

```html
<div id="backdrop-root"></div>
<div id="overlay-root"></div>
```

```jsx
import React, { Fragment } from "react";
import { createPortal } from "react-dom";
const Backdrop = ({ onBackdropClicked }) => (
  <div className="backdrop" onClick={onBackdropClicked} />
);
const Modal = ({ children, onBackdropClicked }) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onBackdropClicked={onBackdropClicked} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <div className="overlay">{children}</div>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
```
