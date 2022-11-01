import { useState } from "react";
import Classnames from "classnames";

export const Card = ({count}) =>  {
  const [flipped, setFlipped] = useState(false);

  const cardClasses = Classnames("card", {"card--flipped": flipped})

  return <div onClick={()=> setFlipped(!flipped)} className={cardClasses}>
    <div className="card-content">
      <div className="card-front">Flip me!</div>
      <div className="card-back">I'm flipped!</div>
    </div>
  </div>
}