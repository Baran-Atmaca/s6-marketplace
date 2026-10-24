import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import { useState } from "react";

import "./App.css";

/*
  Bu componentın,
  - Aktif kategoriyi saklayan activeCategory adında bir state'i olmalı. Bu state'in başlangıç değeri 'electronics' olmalı.
  - Diğer componentlara aktarmak için handleCatChange adında bir fonksiyonu olmalı. Bu fonksiyon aldığı tek parametreyi activeCategory'nin yeni değeri olarak kaydetmeli.
  - Sidebar ve ProductList'e gerekli props'ları iletmeli. (Gerekli propsları componentları inceleyerek bulabilirsin.)
*/

function App() {
  const [activeCategory, setActiveCategory] = useState("electronics");
  const handleCatChange = (category) => {
  setActiveCategory(category);
};
  return (
    <div className="container">
      <Header />
      <div className="content-wrapper">
        <div className="content">
          <Sidebar activeCategory={activeCategory}
                   handleCatChange={handleCatChange}
          />
          <ProductList activeCategory={activeCategory}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
