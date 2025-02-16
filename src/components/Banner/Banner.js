import React from "react";
import { Link } from "react-router-dom";
import welcomeasy from "../../assets/images/welcomeasy.png"; // Assurez-vous que le chemin et l'extension sont corrects
import Image from "../designLayouts/Image"; // Assurez-vous que le composant Image prend correctement l'image

const Banner = () => {
  return (
    <div className="w-full h-full bg-white relative"> {/* Définir une hauteur ou 'h-full' pour occuper toute la hauteur */}
      <Link to="/offer">
        <div className="w-full h-full">
          {/* Ajouter w-full et h-full pour que l'image prenne toute la largeur et hauteur du parent */}
          <Image className="w-full h-full object-cover" imgSrc={welcomeasy} />
        </div>
      </Link>
    </div>
  );
};

export default Banner;
