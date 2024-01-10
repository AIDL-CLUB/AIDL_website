import React from 'react';
import Expt1Image from '../components/images/Expt1.png'; 
import Expt2Image from '../components/images/Expt2.jpg'; 
import Expt3Image from '../components/images/Expt3.png'; 
import Expt4Image from '../components/images/Expt4.png'; 
import Expt5Image from '../components/images/Expt5.png'; 

function Card({ title, description, imageSrc }) {
  return (
    <div className="flex flex-col border border-gray-300 p-10 m-4 w-48 mt-16 bg-white h-120 w-72">
      <img src={imageSrc} alt={title} className="w-full h-100 object-cover" />
      <h2 className="mt-2 text-lg font-semibold">{title}</h2>
      {description && <p className="mt-2 text-gray-600">{description}</p>}
    </div>
  );
}

function Expt() {
  return (
    <div className="flex justify-center items-center bg-dark pl-4 pt-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
    <Card 
      title="K Means" 
      description="K-means is a centroid-based algorithm, or a distance-based algorithm, where we calculate the distances to assign a point to a cluster. In K-Means, each cluster is associated with a centroid." 
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
</div>




  );
}

export default Expt;
