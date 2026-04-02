import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router";

const ProductDetails = () => {
  let navigate = useNavigate();
  let { id } = useParams();

  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
          console.log(res);
          setSingleProduct(res.data);
          setIsLoading(false);
        } catch (error) {
          console.log("error in api", error);
        }
      })();
    }
    setIsLoading(true);
  }, [id]);

  if (isLoading)
    return (
      <h1 className="text-4xl font-semibold">Loading Product detail...</h1>
    );

  return (
    <div className="flex flex-col gap-10">
      <h1>Here is product details</h1>
      <Outlet />

      <div>
        <img width={300} src={singleProduct.image} alt="" />
        <h1>{singleProduct.description}</h1>
      </div>

      <div>
        <button onClick={() => navigate(`/product/${id}/more`)}>
          More details{" "}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
