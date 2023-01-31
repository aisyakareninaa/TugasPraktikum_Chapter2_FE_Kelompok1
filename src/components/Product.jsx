import React, {useState} from "react";
import data from "../components/data.json";
import ImageCard from "./ImageCard";

function App() {
  const [search, setSearch] = useState('');
  return (
        <div className="container mx-auto mb-16">
      <div className="text-center font-bold">
        <h1 className="text-4xl text-indigo-600">Shop your</h1>
        <h2 className="text-4xl text-indigo-600 mb-8 mt-4">product now!</h2>
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
        
          {
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {data.filter((image) => {
              return search.toLowerCase() === '' ? image : image.name.toLowerCase().includes(search)
            }).map((image) => (
              <ImageCard key={image.id} image={image} coba={image.image} />
            ))}
          </div>
          }
        </div>
    
  )
}

export default App;
