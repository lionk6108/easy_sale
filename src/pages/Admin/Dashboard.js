import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { paginationItems } from '../../constants';

const Dashboard = () => {
  const { userRole } = useSelector((state) => state.orebiReducer);
  const navigate = useNavigate();

  // Redirect if not admin
  useEffect(() => {
    if (userRole !== 'admin') {
      navigate('/');
    }
  }, [userRole, navigate]);

  // Statistics calculations
  const totalProducts = paginationItems.length;
  const categories = [...new Set(paginationItems.map(item => item.category))];
  const cities = [...new Set(paginationItems.map(item => item.city))];

  // Price distribution data
  const priceRanges = [
    { range: '0-50', count: 0 },
    { range: '51-100', count: 0 },
    { range: '101-200', count: 0 },
    { range: '201+', count: 0 }
  ];

  paginationItems.forEach(item => {
    const price = parseFloat(item.price);
    if (price <= 50) priceRanges[0].count++;
    else if (price <= 100) priceRanges[1].count++;
    else if (price <= 200) priceRanges[2].count++;
    else priceRanges[3].count++;
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Total Products</h2>
          <p className="text-3xl text-blue-600">{totalProducts}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Categories</h2>
          <p className="text-3xl text-green-600">{categories.length}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Cities</h2>
          <p className="text-3xl text-purple-600">{cities.length}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Price Distribution</h2>
        <BarChart width={800} height={400} data={priceRanges}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="range" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginationItems.slice(-6).map(product => (
            <div key={product._id} className="border p-4 rounded-lg">
              <img src={product.img} alt={product.productName} className="h-32 w-full object-cover mb-2" />
              <h3 className="font-semibold">{product.productName}</h3>
              <p>${product.price}</p>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;