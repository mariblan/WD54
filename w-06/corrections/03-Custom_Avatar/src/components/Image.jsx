import React from "react";

function Image({ image }) {
  return (
    <div className="w-1/3">
      {image ? (
        <img src={image.url} alt={image.revised_prompt} />
      ) : (
        <p>
          <i>No image yet</i>
        </p>
      )}
    </div>
  );
}

export default Image;
