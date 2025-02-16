import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/orebiSlice';
import { 
  Heart, ShoppingBag, Truck, Shield, Camera, 
  Expand, Share2, Package, Crown, Star
} from 'lucide-react';

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState(
    Array.isArray(productInfo.color) ? productInfo.color[0] : productInfo.color
  );
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id: productInfo.id,
        name: productInfo.productName,
        quantity: 1,
        image: productInfo.img,
        badge: productInfo.badge,
        price: productInfo.price,
        colors: selectedColor,
      })
    );
  };

  return (
    <div className="max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden ">
      {/* Barre supérieure avec badges */}
      <div className="bg-gradient-to-r  bg-white from-gray-900 to-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Crown className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium">Collection Premium</span>
        </div>
        <div className="flex gap-3">
          <button className="p-2 hover:bg-white/10 rounded-full transition-all">
            <Share2 className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-all">
            <Expand className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="p-8">
        {/* En-tête du produit */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              {productInfo.badge && (
                <span className="px-3 py-1 bg-red-50 text-red-600 text-sm font-medium rounded-full">
                  {productInfo.badge}
                </span>
              )}
              <span className="px-3 py-1 bg-green-50 text-green-600 text-sm font-medium rounded-full">
                En stock
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {productInfo.productName}
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-500">(432)</span>
              </div>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">148 vendus ce mois</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-4xl font-bold text-gray-900 mb-1">
              ${parseFloat(productInfo.price).toFixed(2)}
            </div>
            <div className="text-sm text-gray-500">
              Prix TTC - Livraison incluse
            </div>
          </div>
        </div>

        {/* Navigation par onglets */}
        <div className="border-b mb-6">
          <div className="flex gap-8">
            {['description', 'caractéristiques', 'avis'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-2 text-sm font-medium transition-all
                  ${activeTab === tab 
                    ? 'text-gray-900 border-b-2 border-gray-900' 
                    : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content sections remain the same */}
        <div className="mb-8">
          {activeTab === 'description' && (
            <p className="text-gray-600 leading-relaxed">{productInfo.des}</p>
          )}
          {activeTab === 'caractéristiques' && (
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-medium text-gray-900 mb-2">Matériaux</h3>
                <p className="text-gray-600">Premium quality materials</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-medium text-gray-900 mb-2">Dimensions</h3>
                <p className="text-gray-600">H: 30cm, L: 20cm, P: 15cm</p>
              </div>
            </div>
          )}
          {activeTab === 'avis' && (
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">Jean D.</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className="w-3 h-3 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600">Excellent produit, je recommande !</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sélection de couleur */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-900 mb-3">
            Sélectionner une couleur
          </h3>
          <div className="flex gap-3">
            {Array.isArray(productInfo.color) &&
              productInfo.color.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`
                    group relative w-12 h-12 rounded-xl transition-all duration-300
                    ${selectedColor === color 
                      ? 'ring-2 ring-offset-2 ring-gray-900 scale-110' 
                      : 'hover:scale-105'
                    }
                  `}
                  style={{ backgroundColor: color.toLowerCase() }}
                >
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-4 h-4 text-white drop-shadow-lg" />
                  </span>
                </button>
              ))}
          </div>
        </div>

        {/* Services Premium */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="relative overflow-hidden group p-4 bg-gray-50 rounded-xl transition-all hover:bg-gray-100">
            <div className="flex flex-col items-center text-center gap-2">
              <Truck className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-medium text-gray-900">Livraison Express</span>
              <span className="text-xs text-gray-500">24-48h</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-sm font-medium">Gratuit</span>
            </div>
          </div>
          <div className="relative overflow-hidden group p-4 bg-gray-50 rounded-xl transition-all hover:bg-gray-100">
            <div className="flex flex-col items-center text-center gap-2">
              <Shield className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-medium text-gray-900">Garantie Premium</span>
              <span className="text-xs text-gray-500">3 ans</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-sm font-medium">Incluse</span>
            </div>
          </div>
          <div className="relative overflow-hidden group p-4 bg-gray-50 rounded-xl transition-all hover:bg-gray-100">
            <div className="flex flex-col items-center text-center gap-2">
              <Package className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-medium text-gray-900">Installation</span>
              <span className="text-xs text-gray-500">Sur place</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-sm font-medium">Offerte</span>
            </div>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex gap-4">
          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-xl font-medium hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            <ShoppingBag className="w-4 h-4" />
            Ajouter au panier
          </button>
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 
              ${isWishlisted 
                ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                : 'border-2 border-gray-900 text-gray-900 hover:bg-gray-50'
              }`}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;