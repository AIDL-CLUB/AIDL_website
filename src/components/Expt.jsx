import React from 'react';
import Expt1Image from '../components/images/Expt1.png'; 
import Expt2Image from '../components/images/Expt2.jpg'; 
import Expt3Image from '../components/images/Expt3.png'; 
import Expt4Image from '../components/images/Expt4.png'; 
import Expt5Image from '../components/images/Expt5.png'; 

function Card({ title, description, imageSrc }) {
  return (
    <div className="flex flex-col border border-gray-300 p-4 m-4 w-48 mt-16 bg-white h-92 w-72">
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover" />
      <h2 className="mt-2 text-lg font-semibold">{title}</h2>
      {description && <p className="mt-2 text-gray-600">{description}</p>}
    </div>
  );
}

function Expt() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 justify-center items-center h-screen bg-dark">
      <Card 
        title="K Means" 
        description="This is the description for K Means."
        imageSrc={Expt1Image} 
      />

      <Card
         title="Random Forest"
         description="This is the description for Random Forest."
        imageSrc={Expt2Image}
      />

      <Card
        title="DBSCAN"
        description="This is the description for DBSCAN."
        imageSrc={Expt3Image}
      />

      <Card
        title="K Nearest Neighbors"
        description="This is the description for K Nearest Neighbors."
        imageSrc={Expt4Image}
      />

      <Card
        title="Linear Regression"
        description="This is the description for Linear Regression."
        imageSrc={Expt5Image}
      />
    </div>
  );
}

export default Expt;
