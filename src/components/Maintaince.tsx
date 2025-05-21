import React, { Component } from "react";

import loadingAnimation from "../jsons/maintaince.json";
import Lottie from "lottie-react";

export class Maintaince extends Component {
  render() {
    return (
      <div className="flex justify-center items-center h-96w-full">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    );
  }
}

export default Maintaince;
