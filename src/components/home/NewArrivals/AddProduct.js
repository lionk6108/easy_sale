import React, { useState } from "react";
import { Camera, Plus, Loader2 } from "lucide-react";

const AddProduct = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    color: "",
    category: "",
    city: "",
    description: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});

  const categories = [
    "Electronics",
    "Furniture",
    "Vehicles",
   
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.productName.trim()) {
      newErrors.productName = "Product name is required";
    }
    if (!formData.price || formData.price <= 0) {
      newErrors.price = "Please enter a valid price";
    }
    if (!formData.category) {
      newErrors.category = "Please select a category";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }
    if (!preview) {
      newErrors.image = "Product image is required";
    }
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          image: "File size must be less than 10MB",
        }));
        return;
      }

      setFormData((prev) => ({
        ...prev,
        image: file,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setErrors((prev) => ({
          ...prev,
          image: "",
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const newId = `PRD${Date.now()}`;
      const newProduct = {
        _id: newId,
        img: preview,
        productName: formData.productName,
        price: parseFloat(formData.price).toFixed(2),
        color: formData.color,
        category: formData.category,
        city: formData.city,
        badge: true,
        des: formData.description,
      };

      if (onAddProduct) {
        await onAddProduct(newProduct);
      }

      setSuccessMessage("Product added successfully!");
      setFormData({
        productName: "",
        price: "",
        color: "",
        category: "",
        city: "",
        description: "",
        image: null,
      });
      setPreview(null);

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      setErrors({ submit: "Failed to add product. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Add New Product</h2>
          <p className="text-gray-600 mt-2">Fill in the details below to list your product</p>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <form onSubmit={handleSubmit}>
            {/* Image Upload Section */}
            <div className="bg-gray-50 p-8 border-b">
              <div className="max-w-xl mx-auto">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Product Image</h3>
                  <p className="text-sm text-gray-500">Add a high-quality image to showcase your product</p>
                </div>
                <div className="mt-4">
                  <div className="flex justify-center">
                    <div className="relative group cursor-pointer">
                      {preview ? (
                        <div className="w-48 h-48 rounded-xl overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
                          <img
                            src={preview}
                            alt="Preview"
                            className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all">
                            <Plus className="text-white opacity-0 group-hover:opacity-100 transform scale-150" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-48 h-48 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center bg-white hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                          <div className="text-center">
                            <Camera className="mx-auto h-12 w-12 text-gray-400" />
                            <p className="mt-2 text-sm text-gray-500">Click to upload</p>
                          </div>
                        </div>
                      )}
                      <input
                        type="file"
                        name="image"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                  {errors.image && (
                    <p className="text-red-500 text-xs text-center mt-2">{errors.image}</p>
                  )}
                  <p className="text-xs text-center text-gray-500 mt-2">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="p-8">
              <div className="max-w-3xl mx-auto space-y-8">
                {/* Success/Error Messages */}
                {successMessage && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-2">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-green-700">{successMessage}</p>
                  </div>
                )}

                {errors.submit && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-700">{errors.submit}</p>
                  </div>
                )}

                {/* Product Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="productName"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.productName ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-colors`}
                    placeholder="Enter your product name"
                    value={formData.productName}
                    onChange={handleInputChange}
                  />
                  {errors.productName && (
                    <p className="text-red-500 text-xs mt-1">{errors.productName}</p>
                  )}
                </div>

                {/* Category and Price Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.category ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm`}
                      value={formData.category}
                      onChange={handleInputChange}
                    >
                      <option value="">Select category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="text-red-500 text-xs mt-1">{errors.category}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 right-10 pl-4 flex items-center pointer-events-none">
                        <span className="text-gray-500">MAD</span>
                      </div>
                      <input
                        type="number"
                        name="price"
                        step="10"
                        className={`w-full pl-8 pr-4 py-3 rounded-lg border ${
                          errors.price ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm`}
                        placeholder="0.00"
                        value={formData.price}
                        onChange={handleInputChange}
                      />
                    </div>
                    {errors.price && (
                      <p className="text-red-500 text-xs mt-1">{errors.price}</p>
                    )}
                  </div>
                </div>

                {/* Color and City Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Color
                    </label>
                    <input
                      type="text"
                      name="color"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                      placeholder="e.g., Blue, Red, Green"
                      value={formData.color}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                      placeholder="Enter city name"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    rows="4"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.description ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm resize-none`}
                    placeholder="Describe your product in detail..."
                    value={formData.description}
                    onChange={handleInputChange}
                  ></textarea>
                  {errors.description && (
                    <p className="text-red-500 text-xs mt-1">{errors.description}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin h-5 w-5" />
                        Processing...
                      </>
                    ) : (
                      "Add Product"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;