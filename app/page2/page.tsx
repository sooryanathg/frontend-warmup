import Nav from "../../components/ui/page2/nav";
import Hero from "../../components/ui/page2/hero";
import Card from "../../components/ui/page2/card";

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <Card />
      <section
        id="about-it"
        style={{
          padding: "60px 20px",
          textAlign: "center",
          background: "#f9fafb",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            marginBottom: "20px",
          }}
        >
          IT Department
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: "#555",
            lineHeight: "1.8",
          }}
        >
          The Information Technology Department offers a comprehensive four-year
  undergraduate program designed to equip students with strong technical
  knowledge and practical skills. Throughout the course, students learn
  programming, web development, database management, networking, software
  engineering, artificial intelligence, cloud computing, and emerging
  technologies. The department provides well-equipped computer laboratories
  with modern systems, high-speed internet connectivity, and the latest
  software tools to support hands-on learning and project development.
  Students participate in workshops, seminars, hackathons, mini-projects,
  and industry-oriented training programs that help bridge the gap between
  academic learning and real-world applications. With experienced faculty,
  collaborative learning environments, and access to advanced lab facilities,
  the department encourages innovation, problem-solving, teamwork, and
  continuous skill development, preparing students for successful careers in
  the IT industry and higher education opportunities.
        </p>
      </section>
    </main>
  );
}