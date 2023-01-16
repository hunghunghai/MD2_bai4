import React, { PureComponent } from 'react'

export class Footers extends PureComponent {
  render() {
    return (
        <div
        className="container-fluid bg-dark text-white text-center border-top py-4 px-sm-3 px-md-5"
        style={{ borderColor: "rgba(256, 256, 256, 0.05) !important" }}>
        <p className="m-0 text-white">
          © <a href="#">Domain Name</a>. All Rights Reserved. Designed by
        </p>
      </div>
    )
  }
}

export default Footers