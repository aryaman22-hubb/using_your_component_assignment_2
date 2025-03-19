import LikeButton from "./likebutton";

function PostCard() {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "10px",
      margin: "10px 0",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      backgroundColor: "#f9f9f9"
    }}>
      <img 
        src="https://via.placeholder.com/50" 
        alt="Default profile" 
        style={{ width: "50px", height: "50px", borderRadius: "50%" }}
      />
      <div style={{ flex: 1 }}>
        <h4 style={{ margin: "0" }}>Unknown User</h4>
        <p style={{ margin: "5px 0" }}>No content available.</p>
      </div>
      <LikeButton />
    </div>
  );
}

export default PostCard;
