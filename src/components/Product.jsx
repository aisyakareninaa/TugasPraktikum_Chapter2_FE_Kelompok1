import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1f2898db-ceb4-4565-a1eb-2d3beb8a509c/product.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230130T072405Z&X-Amz-Expires=86400&X-Amz-Signature=b33123e43a01a610a35f04c061929b26cc1e29d99ab38455a726445e348878ed&X-Amz-SignedHeaders=host&x-id=GetObject"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [data]);

  return (
    <div className="container mx-auto mb-16">
      <div className="text-center font-bold">
        <h1 className="text-4xl text-indigo-600">Get your</h1>
        <h2 className="text-4xl text-indigo-600 mb-8 mt-4">hapiness now!</h2>
      </div>
      <div className="max-w-sm rounded overflow-hidden my-10 mx-auto mt-0">
      <form className="w-full max-w-sm bg-white/60 p-1">
        <div className="flex items-center border-b border-b-2 border-indigo-500 py-2">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image..."
          />
        </div>
      </form>
    </div>

      {!isLoading && data.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
      )}

      {isLoading ? (
        <h1 className="text-4xl text-center mx-auto mt-24 h-60">Loading...</h1>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {data.filter((image) => {
            return search.toLowerCase() === '' ? image : image.name.toLowerCase().includes(search)
          }).map((image) => (
            <ImageCard key={image.id} image={image} coba={image.image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
