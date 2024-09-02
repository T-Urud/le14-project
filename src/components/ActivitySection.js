import React, { useEffect, useState } from "react";
import axios from "axios";
import FigureActivity from "./FigureActivity";

const ActivitySection = () => {
  const [activityImg, setActivityImg] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/activityDB.json")
      .then((res) => {
        setActivityImg(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section id="activity" className="px-4 my-4">
      <div className="grid [grid-template-columns:30%_70%]">
        <div className="p-4">
          <h2 className="mb-8 uppercase">Que faire dans les alentours ? </h2>
          <p className="leading-loose">
            Au cœur de la Vallée du Rhône, la destination d’Ardèche Hermitage
            s’étend autour de Tournon sur Rhône, Tain l’Hermitage sur les deux
            rives du Rhône. A seulement 1h au sud de Lyon, laissez-vous
            surprendre par la diversité des activités offertes ici. Profitez de
            loisirs en famille, des nombreuses pratiques sports nature, de
            balades au cœur de nos vignobles en terrasse, visitez des lieux
            chargés d'histoire et nombreuses autres pépites… Vivez des instants
            riches en émotions et en partage lors de votre séjour chez nous !
          </p>
        </div>
        <div className="">
          <ul className="flex flex-wrap gap-[2%]  gap-y-8 justify-center">
            {activityImg.map((activity) => (
              <FigureActivity key={activity.id} activity={activity} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
