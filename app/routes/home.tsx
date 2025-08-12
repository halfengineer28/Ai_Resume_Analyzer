import Navbar from "~/componets/Navbar";
import type { Route } from "./+types/home";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback from your dream job" },
  ];
}

export default function Home() {
  return<main className="bg-[url('/image/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Application & Resume Rating</h1>
        <h2>Remove your submission and checked AI powered feedback.</h2>
      </div>
      {/* RESUME CARD */}
      <div>
        <div>
          
        </div>
      </div>

    </section>
  </main>
}
