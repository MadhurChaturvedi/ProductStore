import React, { useEffect } from "react";
import { useProductStore } from "../store/product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const { fetchProducts, products, deleteProduct } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log(products);

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (success == true) {
      toast.success(`${message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error(`${message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((item) => (
          <div
            className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
            key={item._id}
          >
            <img
              className="object-cover w-full h-64"
              src={item.image}
              alt="Article"
            />

            <div className="p-6">
              <div>
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                  {item.name}
                </span>
                <span className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline">
                  {item.price}
                </span>
                {/* <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie parturient et sem ipsum volutpat vel. Natoque sem et
                aliquam mauris egestas quam volutpat viverra. In pretium nec
                senectus erat. Et malesuada lobortis.
              </p> */}
              </div>

              {/* <div className="mt-4">
              <div className="flex items-center">
                <div className="flex items-center">
                  <img
                    className="object-cover h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                    alt="Avatar"
                  />
                  <a
                    href="#"
                    className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                    tabIndex="0"
                    role="link"
                  >
                    Jone Doe
                  </a>
                </div>
                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                  21 SEP 2015
                </span>
              </div>
            </div> */}
              <button
                onClick={() => handleDeleteProduct(item._id)}
                type="button"
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Red
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
