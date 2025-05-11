import axios from "axios";
import { useEffect, useState } from "react";

const Books = () => {
  let [Data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let fetchBooks = async () => {
    try {
      let books = await axios.get(
        "https://openlibrary.org/search.json?q=javascript"
      );
      console.log(books.data.docs);
      return setData(books["data"]["docs"]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {


   fetchBooks();
   console.log(Data)

  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div>Books</div>
      <div className="m-1.5 bg-blue-700 rounded border p-5 text-white">
        {Data.map((book,index) => {
          return (
            <div key={book.key}>
              <h2>{book[index].title || "Loading"} </h2>
              <p>Author: {book[index].author_name[0] || "Loading"}</p>
              <p>Year: {book[index].first_publish_year || "Loading"}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Books;
