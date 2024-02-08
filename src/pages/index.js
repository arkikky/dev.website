// @layout
import Header from "@layouts/Header";

const App = (props) => {
  return (
    <main className="ca2024Main ca2024MainMandatory approved overflow-x-hidden">
      {/* @header */}
      <Header />

      <section className=" snap-start snap-always h-full min-h-fixScreen">
        {process.env.NEXT_PUBLIC_AUTHOR}
      </section>
    </main>
  );
};

export default App;
