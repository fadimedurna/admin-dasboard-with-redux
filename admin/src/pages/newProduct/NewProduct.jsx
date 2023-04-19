import { useState } from "react";
import "./newProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firbase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function NewProduct() {
  const [inputs, setInputs] = useState({
    title: "",
    desc: "",
    price: "",
    stock: "",
  });

  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(",").map((item) => item.trim()));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat };
          //console.log(product);
          addProduct(product, dispatch);
        });
      }
    );

    navigate("/products");
  };

  return (
    <div className='newProduct'>
      <h1 className='addProductTitle'>New Product</h1>
      <form className='addProductForm'>
        <div className='addProductItem'>
          <label>Image</label>
          <input
            type='file'
            id='file'
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className='addProductItem'>
          <label>Title</label>
          <input
            name='title'
            type='text'
            placeholder='Apple Airpods'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Description</label>
          <input
            name='desc'
            type='text'
            placeholder='description'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem'>
          <label>Price</label>
          <input
            name='price'
            type='number'
            placeholder='100'
            onChange={handleChange}
          />
        </div>
        <div className='addProductItem' onChange={handleCat}>
          <label>Categories</label>
          <input type='text' placeholder='jean, sweater, etc.' />
        </div>
        <div className='addProductItem'>
          <label>Stock</label>
          <select name='inStock' onChange={handleChange}>
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
        </div>
        <button onClick={handleClick} className='addProductButton'>
          Create
        </button>
      </form>
    </div>
  );
}
