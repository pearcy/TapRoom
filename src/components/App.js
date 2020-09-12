import React from "react";
import Header from "./Header";
import KegList from "./KegList"
import Footer from "./Footer";

function App() {
  
  return (

    <React.Fragment>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="px-6 py-4">
          <Header />
          <KegList />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

// rounded overflow-hidden shadow-lg"




