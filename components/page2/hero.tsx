export default function Hero() {
  return (
    <main style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      background: "#f9fafb",
      fontFamily: "Arial"
    }}>

      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        IT DEPARTMENT 🚀
      </h1>

      <p style={{ fontSize: "18px", color: "#555", marginBottom: "25px" }}>
        Learn. Build. Grow your frontend skills with us.
      </p>

      <div style={{ display: "flex", gap: "12px" }}>
        
        <button style={{
          padding: "12px 24px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Get Started
        </button>

        <button style={{
          padding: "12px 24px",
          background: "white",
          color: "blue",
          border: "2px solid blue",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Learn More
        </button>

      </div>

    </main>
  );
}