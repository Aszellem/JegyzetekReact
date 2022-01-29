import React from "react";

import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function App() {
    return (
        <div>
            <Header />
            <Note 
               key={n.key}
               title={n.title}
               content={n.content}
            />
            <Footer />
        </div>
    );
}

export default App;