// api https://dummyjson.com/posts
//fetch api

import axios from "axios";

// fetch("https://dummyjson.com/posts")
//   .then((result) => result.json())
//   .then((finalAns) => console.log(finalAns));

// axios.get("https://dummyjson.com/posts").then(({ data }) => console.log(data));

// const fetchData = async () => {
//   //   const posts = await axios.get("https://dummyjson.com/posts");
//   //   const { data } = posts;
//   //   console.log(data );
//   try {
//     const { data } = await axios.get("https://dummyjson.com/posts");
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchData();

const posts = [
  {
    title: "sssss",
    reac: {
      like: 1,
      dislike: 12,
    },
  },
  {
    title: "ssspppss",
    reac: {
      like: 100,
      dislike: 12,
    },
  },
];

console.log(JSON.stringify(posts[0].reac));
