export default function Hero() {
  return (
  <main className="transition-all duration-500"
  style={{
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  background: "#f9fafb",
  fontFamily: "Arial",
  padding: "0 16px"
}}>
      <h1 className="transition-all duration-500 hover:scale-[1.03]"
      style={{
  fontSize: "clamp(32px, 5vw, 56px)",
  marginBottom: "10px"
}}>
        IT DEPARTMENT 🚀
      </h1>

      <p 
      className="transition-all duration-300 hover:text-black hover:tracking-wide"
style={{
  fontSize: "clamp(14px, 2vw, 18px)",
  color: "#555",
  marginBottom: "25px",
  maxWidth: "600px"
}}>
        Learn, build, and grow with the IT Department. Explore modern technologies, develop real-world projects, and strengthen your frontend development skills.
      </p>

      <div style={{
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  justifyContent: "center"
}}>
        
        <button
        className="transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl active:scale-95"

   style={{
          padding: "12px 24px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          transition: "all 0.3s ease"

        }}>
          Get Starteds
        </button>

        <a
  href="#about-it"
  className="transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-gray-100 active:scale-95"
  style={{
    padding: "12px 24px",
    background: "white",
    color: "blue",
    border: "2px solid blue",
    borderRadius: "999px",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block"
  }}
>
  Learn More
</a>
      </div>

    </main>
  );
}
