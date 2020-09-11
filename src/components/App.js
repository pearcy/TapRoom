import React from "react";
import Header from "./Header";
import KegList from "./KegList"
import Footer from "./Footer";

function App() {
  
  return (

    <React.Fragment>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
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


