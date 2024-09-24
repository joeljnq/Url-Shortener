import React, { useState } from "react";
import Form from "./Form";
import Shortener from "./Shortener";
const Home: React.FC  = () => {
    const [newUrl, setNewUrl] = useState<string>('');
  const [error, setError] = useState<string>('');

    
return(
    <>
    <div className="absolute top-0 z-[-2] h-screen w-screen dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <header className="mt-20"> 
        <h1 className="text-5xl text-center"> URL Shortner</h1>
    </header>
    <main className="mt-40 text-center">
        <h2 className="text-2xl">The simplest URL Shortner</h2>
        {error && <p className="text-red-500">{error}</p>}
        <Form onNewUrl={setNewUrl} onChangeError={setError} />
        <Shortener newUrl={newUrl} />
    </main>

    </>
)
}

export default Home;