import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useProductStore } from "../store/product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const { createProduct } = useProductStore();
  const handleSubmit = async () => {
    const { success, message } = await createProduct(newProduct);
    console.log(success, "Success");
    console.log(message, "message");
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
    setNewProduct({
      name: "",
      price: "",
      image: "",
    });
  };
  return (
    <div className="w-full h-3/4 max-w-7xl mx-auto flex justify-center items-center  border-2 flex-col">
      <div className="w-[50%] h-auto p-4 flex flex-col gap-5 border-2">
        <TextField
          label="Product Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
          variant="outlined"
        />
        <TextField
          label="Price"
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          value={newProduct.price}
          variant="outlined"
        />
        <TextField
          label="Image URL"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
          variant="outlined"
        />
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="success"
          size="large"
        >
          Large
        </Button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default CreatePage;
