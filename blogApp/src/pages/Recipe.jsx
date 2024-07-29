import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../components/Table";

const Recipe = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [difficulty, setDifficulty] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(
          `https://dummyjson.com/recipes/search?q=${query}&limit=10&select=image,name,${ingredients},${instructions},${difficulty}`
        );
        setData(data.recipes || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [query, ingredients, instructions, difficulty]);

  const change = () => {
    const ing = document.getElementById("ing");
    const instructions = document.getElementById("intr");
    const diff = document.getElementById("diff");

    // for instructions
    if (instructions.checked) {
      setInstructions("instructions");
    } else {
      setInstructions("");
    }

    // for ingredients
    if (ing.checked) {
      setIngredients("ingredients");
    } else {
      setIngredients("");
    }

    //for difficulty
    if (diff.checked) {
      setDifficulty("difficulty");
    } else {
      setDifficulty("");
    }
  };

  return (
    <div>
      <h1>Recipes</h1>
      <hr />
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <input type="checkbox" name="" id="" checked disabled />
      Name
      <input type="checkbox" name="" id="" checked disabled />
      Image
      <input type="checkbox" name="" id="ing" onClick={change} />
      Ingredients
      <input type="checkbox" name="" id="intr" onClick={change} />
      Instructions
      <input type="checkbox" name="" id="diff" onClick={change} />
      Difficulty
      <hr />
      {data.length > 0 ? (
        <Table header={Object.keys(data[0])} body={data} />
      ) : (
        <>No Data Found</>
      )}
    </div>
  );
};

export default Recipe;
