import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "../../redux/slices/slice";
import { useEffect } from "react";
function Detail() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllData());
  }, []);
  const data = useSelector((state) => state.products.products);

  const id = useParams();
  console.log(id.id);
  console.log(data);
  let detailElement = data.find((element) => element.id == id.id);
  console.log(detailElement);
  return (
    <div>
      <h1>
        product {detailElement?.name}, {detailElement?.price}
      </h1>
    </div>
  );
}

export default Detail;
