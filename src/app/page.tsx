import Head from 'next/head';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My App</title>
        <meta name="description" content="Team starter project" />
      </Head>

      <Header />

      <main className="max-w-4xl mx-auto p-6">
        <section className="bg-white rounded shadow p-6">
          <h1 className="text-2xl font-bold mb-4">Welcome</h1>
          <p className="text-gray-600">This is the home page. Team members can start building features from here.</p>
        </section>
      </main>
    </div>
  );
}
