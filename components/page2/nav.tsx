export default function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 40px",
        background: "#f9fafb",
        borderBottom: "1px solid #ddd",
        fontFamily: "Arial",
      }}
    >
      <h2
        style={{
          color: "blue",
          margin: 0,
        }}
      >
        IT Department 🚀
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <a href="#" style={{ textDecoration: "none", color: "#333" }}>
          Home
        </a>

        <a href="#" style={{ textDecoration: "none", color: "#333" }}>
          About
        </a>

        <a href="#" style={{ textDecoration: "none", color: "#333" }}>
          Contact
        </a>
      </div>
    </nav>
  );
}