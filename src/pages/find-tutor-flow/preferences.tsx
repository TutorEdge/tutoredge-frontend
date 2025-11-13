import Head from 'next/head';

import TutorPreferences from '@/pages/find-tutor-flow/tutor-preferences';

export default function PreferencesPage() {
  return (
    <>
      <Head>
        <title>Preferences – TutorEdge</title>
      </Head>
      <main className="mx-auto max-w-6xl p-6">
        <TutorPreferences />
      </main>
    </>
  );
}
