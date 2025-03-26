import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Toba Toba",
  description: "私たちのチームとミッションについて",
};

export default function About() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="prose prose-lg">
        <p className="mb-4">
          私たちは、革新的なソリューションを提供することに情熱を注ぐチームです。
        </p>
        <p className="mb-4">
          最新のテクノロジーを活用し、ユーザーの期待を超える体験を創造することを目指しています。
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">私たちのミッション</h2>
        <p className="mb-4">
          技術を通じて、人々の生活をより豊かにすることです。
          日々進化するデジタル世界において、
          シンプルで使いやすいソリューションを提供し続けます。
        </p>
      </div>
    </main>
  );
}
