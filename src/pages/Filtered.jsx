import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Filtered() {
  const [filteredImages, setFilteredImages] = useState([]);
  const params = useParams();

  const getFilteredImages = async (category) => {
    const api = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${category} 
            `
    );
    const data = await api.json();
    setFilteredImages(data);
  };

  useEffect(() => {
    getFilteredImages(params.id);
  }, [params.id]);

  return (
    <div>
      {filteredImages.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.url} alt="Cat Image" />
          </div>
        );
      })}
    </div>
  );
}

export default Filtered;
