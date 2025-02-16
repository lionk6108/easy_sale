import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";

// Layout Components
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import Footer from "./components/home/Footer/Footer";
import SpecialCase from "./components/SpecialCase/SpecialCase";

// Context Providers
import { ThemeProvider, LanguageProvider, LanguageContext } from "./components/home/Header/Header";

// Route Protection Components
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import ErrorBoundary from './components/ErrorBoundary';

// Page Components
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Offer from "./pages/Offer/Offer";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist";
import Payment from "./pages/payment/Payment";
import ChatPage from './pages/ChatPage';
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import AdminDashboard from './pages/Admin/Dashboard';
import AddProduct from './components/home/NewArrivals/AddProduct';
import Dashboard from "./components/Dahboard";

// Layout Components
const MainLayout = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const AuthLayout = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};

// Router Configuration
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorBoundary />}>
      {/* Main Layout Routes */}
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/product/:_id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/paymentgateway" element={<Payment />} />
        <Route path="/chat/:id" element={<ChatPage />} />
        {/* Protected Routes */}

        <Route
          path="/add-product"
          element={
            
              <AddProduct />
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
      </Route>

      {/* Auth Layout Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
    </Route>
  )
);

// App Content Component
const AppContent = () => {
  const { language } = React.useContext(LanguageContext);
  
  return (
    <div className="font-bodyFont" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <RouterProvider router={router} />
    </div>
  );
};

// Main App Component
function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;