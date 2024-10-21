"use client";

function NotFound() {
  const styleMain = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  };
  const styleSection = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  };

  return (
    <main style={styleMain}>
      <section style={styleSection} className="p404">
        <h1>...Pagina non trovata...</h1>
      </section>
    </main>
  );
}

export default NotFound;
