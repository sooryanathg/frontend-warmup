"use client";

export default function Card() {
  return (
    <div style={{
      width: "300px",
      padding: "20px",
      margin: "20px",
      background: "white",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      textAlign: "center",
      fontFamily: "Arial"
    }}>
      
      <h2 style={{ fontSize: "22px", marginBottom: "10px", color: "blue" }}>
        Frontend Basics
      </h2>

      <p style={{ fontSize: "16px", color: "#555", marginBottom: "20px" }}>
        Learn HTML, CSS, and JavaScript to kickstart your journey.
      </p>

      <button style={{
        padding: "10px 20px",
        background: "blue",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "background 0.3s"
      }}
      onMouseEnter={e => e.currentTarget.style.background = "darkblue"}
      onMouseLeave={e => e.currentTarget.style.background = "blue"}>
        Explore
      </button>

    </div>
  );
}