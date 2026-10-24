import Category from "./../components/Category";
import { useState, useEffect } from "react";
import axios from "axios";

/*
  Bu component;
  - activeCategory ve handleCatChange değerlerini props olarak bu isimlerle almalı
  - https://fakestoreapi.com/products/categories adresindeki kategorileri axios ile almalı
  - Bu kategorileri bir state içinde saklamalı
  - map fonksiyonu ile bu state içindeki kategorileri listelemeli
  - Listelerken kullandığı Category componentına gerekli props'ları aktarmalı (Category componentını inceleyebilirsin)
*/

export default function Sidebar({ activeCategory, handleCatChange }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCategories(res.data);
      });
  }, []);
  return (
    <nav>
      <h2>Kategoriler</h2>
      {categories.map((category, index) => (
        <Category key={index}
                  category={category}
                  isActive={category === activeCategory}
                  handleCatChange={handleCatChange} 
        />
      ))}
    </nav>
  );
}
