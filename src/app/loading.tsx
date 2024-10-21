import LoaderSite from "@/components/loaders/loader";
export default function Loading() {
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
      <section style={styleSection}>
        <LoaderSite />
      </section>
    </main>
  );
}
