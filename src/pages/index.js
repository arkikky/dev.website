import Link from 'next/link';

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <section className="flex flex-col items-start">
        <h1>Customer List</h1>

        <div>Data List :</div>
      </section>
    </main>
  );
}
