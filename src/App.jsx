import Container from "./components/ui/Container/Container";
import "./styles/global.css"
function App() {
  return (
    <main className="min-h-screen bg-[var(--mist)]">
      <Container>
        <h1 className="pt-20 text-6xl text-[var(--forest)]">
          The Quiet Developer
        </h1>

        <p className="mt-4 text-xl text-[var(--moss)]">
          by Swathy
        </p>
      </Container>
    </main>
  );
}

export default App;
