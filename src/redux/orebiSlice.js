import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Auth state
  userInfo: JSON.parse(localStorage.getItem("userInfo")) || null,
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  userRole: localStorage.getItem("userRole") || null,
  users: [
    { email: "admin@example.com", password: "admin123", role: "admin", name: "Admin User" },
    { email: "user@example.com", password: "user123", role: "user", name: "Regular User" },
  ],
  
  // Cart state
  products: [],
  
  // Wishlist state
  wishlist: [],
};

export const orebiSlice = createSlice({
  name: "orebi",
  initialState,
  reducers: {
    // Auth actions
    loginUser: (state, action) => {
      const { email, password, role, name } = action.payload;
      const foundUser = state.users.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        const userInfo = {
          email: foundUser.email,
          role: foundUser.role,
          name: foundUser.name
        };
        
        state.isAuthenticated = true;
        state.userInfo = userInfo;
        state.userRole = foundUser.role;
        
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        localStorage.setItem("userRole", foundUser.role);
      }
    },

    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.userInfo = null;
      state.userRole = null;
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("userInfo");
      localStorage.removeItem("userRole");
    },

    registerUser: (state, action) => {
      const newUser = {
        ...action.payload.user,
        role: "user"
      };
      state.users.push(newUser);
      state.isAuthenticated = true;
      state.userInfo = newUser;
      state.userRole = "user";
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userInfo", JSON.stringify(newUser));
      localStorage.setItem("userRole", "user");
    },

    // Cart actions
    addToCart: (state, action) => {
      const existingItem = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        state.products.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.products.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity++;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.products.find((item) => item._id === action.payload._id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },

    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },

    resetCart: (state) => {
      state.products = [];
    },

    // Wishlist actions
    addToWishlist: (state, action) => {
      const existingItem = state.wishlist.find(
        (item) => item._id === action.payload._id
      );
      if (!existingItem) {
        state.wishlist.push(action.payload);
      }
    },

    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item._id !== action.payload
      );
    },

    resetWishlist: (state) => {
      state.wishlist = [];
    },
  },
});

// Export actions
export const {
  // Auth actions
  loginUser,
  logoutUser,
  registerUser,
  
  // Cart actions
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  resetCart,
  
  // Wishlist actions
  addToWishlist,
  removeFromWishlist,
  resetWishlist,
} = orebiSlice.actions;

// Export reducer
export default orebiSlice.reducer;