import React, { useState } from "react";
import Form from "./Form";
import Shortener from "./Shortener";
const Home: React.FC  = () => {
    const [newUrl, setNewUrl] = useState<string>('');
    console.log(newUrl);
    
return(
    <>
    <div className="absolute top-0 z-[-2] h-screen w-screen dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <header> 
        <h1 className="text-5xl text-center"> URL Shortner</h1>
    </header>
    <main className="mt-10 text-center">
        <h2 className="text-2xl">The simplest URL Shortner</h2>
        <Form onNewUrl={setNewUrl} />
        <Shortener newUrl={newUrl} />
    </main>

    </>
)
}

export default Home;