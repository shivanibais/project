import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const CocktailPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        console.log("hi");
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          console.log("hi");
          //Giving alias directly to the attributes we are getting
          const {
            strDrink: name,
            strDrinkThumb: img,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            img,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className="error-heading">No cocktail to display</h2>;
  }

  const {
    name,
    img,
    category,
    info,
    glass,
    instructions,
    ingredients,
  } = cocktail;

  return (
    <section className="section drink-section">
      <Link to="/" className="btn">
        BACK HOME
      </Link>
      <h2 className="cocktail-name">{name}</h2>
      <div className="single-drink">
        <img src={img} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name </span> {name}
          </p>
          <p>
            <span className="drink-data">Category </span> {category}
          </p>
          <p>
            <span className="drink-data">Info </span> {info}
          </p>
          <p>
            <span className="drink-data">Glass </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Instructions </span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">Ingredients </span>
            {ingredients.map((item, index) => {
              return item ? <p key={index}>{item}</p> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CocktailPage;
