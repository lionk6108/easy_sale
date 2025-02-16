import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromWishlist } from '../redux/orebiSlice';
import Product from '../components/home/Products/Product';
import emptyCartImage from '../assets/images/emptyCart.jpg';  // Adjust the path as needed

const WishlistItem = ({ item, onRemove }) => {
  return (
    <div className="relative">
      <button
        onClick={() => onRemove(item._id)}
        className="absolute top-2 right-2 z-10 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
      >
        ×
      </button>
      <Product
        _id={item._id}
        img={item.image}
        productName={item.name}
        price={item.price}
        color={item.color}
      />
    </div>
  );
};

const Wishlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.orebiReducer.wishlist);

  const handleRemoveFromWishlist = (itemId) => {
    dispatch(removeFromWishlist(itemId));
  };

  if (!wishlist || wishlist.length === 0) {
    return (
      <div className="container mx-auto font-karla min-h-[83vh] px-4">
        <div className="flex flex-col justify-center items-center p-8">
        <img src={emptyCartImage} className="w-60" alt="empty" />
        <p className="text-center text-xl font-semibold my-2 dark:text-white">
            Your wishlist is empty
          </p>
          <button
            onClick={() => navigate('/shop')}
            className="bg-primeColor text-white px-8 py-2 mt-4 rounded-md hover:bg-opacity-90"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto font-karla min-h-[83vh] px-4">
      <div className="flex justify-between items-center my-8">
        <h2 className="text-2xl font-bold">Your Wishlist ({wishlist.length} items)</h2>
        <button
          onClick={() => navigate('/shop')}
          className="bg-primeColor text-white px-6 py-2 rounded-md hover:bg-opacity-90"
        >
          Continue Shopping
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlist.map((item) => (
          <WishlistItem
            key={item._id}
            item={item}
            onRemove={handleRemoveFromWishlist}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;