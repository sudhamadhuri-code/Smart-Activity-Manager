import React from "react";

function ActivityCard({ activity }) {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "10px",
      margin: "10px 0"
    }}>
      <h3>{activity.title}</h3>
      <p>{activity.description}</p>
      <p>Statu:{activity.status}</p>
      <p>Priority: {activity.priority}</p>
    </div>
  );
}

export default ActivityCard;
