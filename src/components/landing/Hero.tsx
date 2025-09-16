import Head from 'next/head';

export default function Hero() {
  return (
    <>
      <Head>
        <title>TutorEdge</title>
      </Head>
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#177ccc] to-[#12d6c0]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">
            🎉 TutorEdge - Hero Section
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Next.js + Tailwind setup completed!
          </p>
        </div>
      </main>
    </>
  );
}
