import React from "react";
import Maintaince from "../components/Maintaince";

type TrackingProps = {
  isUnderMaintaince: boolean;
};

const Tracking: React.FC<TrackingProps> = ({ isUnderMaintaince }) => {
  return <div>{isUnderMaintaince ? <Maintaince /> : "Normal Mode"}</div>;
};

export default Tracking;
