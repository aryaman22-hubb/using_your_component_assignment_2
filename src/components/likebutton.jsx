import { useState } from "react";

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button 
      onClick={toggleLike} 
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "1.2rem",
        color: isLiked ? "red" : "gray",
      }}
    >
      {isLiked ? "❤️" : "🤍"}
    </button>
  );
}

export default LikeButton;
