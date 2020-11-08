import React from 'react';
import './styles/EndangeredList.css';
import endangeredAnimalsData from "../data/endangeredAnimals";
import EndangeredProfile from "./EndangeredProfile";

function EndangeredList() {
  return (
    <div className="endangered-list">
      {endangeredAnimalsData.map(animalData => 
        <EndangeredProfile 
          key={animalData.id} 
          name={animalData.name} 
          country={animalData.country} 
          imgName={animalData.imgName}
          statsImgName={animalData.statsImgName}
          statsCaption={animalData.statsCaption}
        />
      )}
    </div>
  );
}

export default EndangeredList;
