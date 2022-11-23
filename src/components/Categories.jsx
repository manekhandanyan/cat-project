import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { categoriesState, getCategories } from "../store/categoriesSlice";
import styled from "styled-components";

function Categories() {
  const categories = useSelector(categoriesState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <CategoryWrapper>
      {categories.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/${item.id}`}>{item.name}</Link>
          </div>
        );
      })}
    </CategoryWrapper>
  );
}
const CategoryWrapper = styled.div`
  padding: 1rem;
`;

const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  line-height: 3rem;
`;
export default Categories;
