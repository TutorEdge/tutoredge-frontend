import Head from 'next/head';

import TutorMatches from '@/pages/find-tutor-flow/tutor-matches';

export default function MatchesPage() {
  return (
    <>
      <Head>
        <title>Your matches – TutorEdge</title>
      </Head>
      <main className="mx-auto max-w-6xl p-6">
        <TutorMatches />
      </main>
    </>
  );
}
