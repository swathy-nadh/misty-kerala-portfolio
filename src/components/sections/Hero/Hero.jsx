import Container from "../../ui/Container/Container";
import ScrollIndicator from "../../ui/ScrollIndicator/ScrollIndicator.jsx";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          <p className="uppercase tracking-[0.5em] text-[var(--moss)]">
            The Quiet Developer
          </p>

          <p className="mt-4 text-lg italic text-[var(--moss)]">
            by
          </p>

          <h1 className="mt-2 text-7xl font-normal text-[var(--forest)]">
            Swathy
          </h1>

          <p className="mx-auto mt-10 max-w-xl text-xl leading-9 text-[var(--earth)]">
            Building thoughtful software inspired by the calm of Kerala.
          </p>

          <ScrollIndicator />

        </div>
      </Container>
    </section>
  );
}

export default Hero;