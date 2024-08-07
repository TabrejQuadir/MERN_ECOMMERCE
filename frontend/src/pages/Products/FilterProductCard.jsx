import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toast } from "react-toastify";
import HeartIcon from "./HeartIcon";

const ProductCard = ({ p }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
    toast.success("Item added successfully", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };

  return (
    <div className="w-80 bg-[#ffffff] rounded-lg shadow-lg overflow-hidden  ">
      <section className="relative">
        <Link to={`/product/${p._id}`}>
          <img
            className="cursor-pointer w-full"
            src={p.image}
            alt={p.name}
            style={{ height: "350px", objectFit: "contain" }}
          />
        </Link>
        <span className="absolute top-3 left-3 bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full ">
            {p?.brand}
          </span>
        <HeartIcon product={p} className="absolute top-3 right-3 " />
      </section>

      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-lg font-bold text-black dark:text-white">
          {p?.name?.substring(0, 15)}...
          </h5>
          <p className="text-lg font-semibold text-pink-500">
            {p?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
        </div>

        <p className="mb-4 text-gray-600">
          {p?.description?.substring(0, 30)}...
        </p>

        <section className="flex justify-between items-center">
          <Link
            to={`/product/${p._id}`}
            className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-pink-500 to-pink-700 rounded-lg hover:from-pink-600 hover:to-pink-800 focus:ring-4 focus:outline-none focus:ring-black hover:animate-bounce"
          >
            Read More
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>

          <button
            className="p-2 text-pink-500 rounded-full hover:text-pink-500 transition-transform transform hover:animate-ping"
            onClick={() => addToCartHandler(p, 1)}
          >
            <AiOutlineShoppingCart size={25} />
          </button>
        </section>
      </div>
    </div>
  );
};

export default ProductCard;
