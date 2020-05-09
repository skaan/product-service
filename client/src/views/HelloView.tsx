import * as React from "react";

export class HelloView extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <>
        <h1></h1>
        <h3>We have successfully setup our React, Webpack, and Typescript project!</h3>
      </>
    )
  }
}