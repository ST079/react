import axios from "axios";
import { useEffect, useState } from "react";
import Table from "../components/Table";
const UseEff = () => {
  //api call gard feri use hunca
  // fetch api chalaune or axios chalaune
  // axios is preferable ... compatiable with both backend and frontend

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios("https://dummyjson.com/posts");
        setPosts(data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* {JSON.stringify(posts)} */}
      {posts.length > 0 && (
        <Table header={Object.keys(posts[0])} data={posts} />
      )}
    </div>
  );
};

export default UseEff;
