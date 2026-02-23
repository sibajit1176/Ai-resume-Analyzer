import Navbar from "~/components/navbar";
import type { Route } from "./types/home";

import ResumeCard from "~/components/ResumeCard";
import { resumes } from "../../constants/index";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
   const { auth } = usePuterStore();
    const navigate = useNavigate()
    useEffect(() => {
   console.log("Auth object:", auth);

   if (auth?.isAuthenticated === false) {
        navigate('/auth?next=/')
   }
}, [auth]);
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Application & Resume rating</h1>
        <h2>Review your submission and check AI-powered feedback</h2>
      </div>
    {resumes.length > 0 && (
      <div className="resumes-section">
        {resumes.map((resume: any) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    )}
    </section>

  </main>;
}
