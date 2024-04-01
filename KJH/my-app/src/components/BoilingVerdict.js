import React from "react";

export default function BoilingVerdict(props) {
  // 섭씨
  if (props.scale === "c") {
    if (props.temperature >= 100) {
      return <p>🔥🔥🔥🔥🔥🔥🔥</p>;
    }
    return <p>The water would not boil.</p>;
  }

  // 화씨
  if (props.temperature >= 212) {
    return <p>🔥🔥🔥🔥🔥🔥🔥</p>;
  }
  return <p>The water would not boil.</p>;
}
