import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { imagesState, getImages } from "../store/imagesSlice";

function MainPage() {
  const images = useSelector(imagesState);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImages(currentPage));
  }, [currentPage]);

  return (
    <CardWrapper>
      {images &&
        images.map((item) => {
          return (
            <Card key={item.id}>
              <img src={item.url} alt="Cat Image" />
            </Card>
          );
        })}
      <button
        style={{ margin: "50px" }}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Load More
      </button>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

const Card = styled.div`
  height: 100px;
  width: 100px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default MainPage;
