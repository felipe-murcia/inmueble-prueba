import React from "react";
import './PropertyCard.css'
import {AiFillHeart} from 'react-icons/ai'
import {truncate} from 'lodash'
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";
const PropertyCard = ({card}) => {

  const navigate = useNavigate();

  let notFoundImage = "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=";
  let image = card?.images[0]?.file || notFoundImage;
  //let image = notFoundImage;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US').format(amount);
  };

  return (
    <div className="flexColStart r-card"
    onClick={()=>navigate(`../properties/${card.id}`)}
    >
      <img src={image} alt="home" />
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{formatCurrency(card.price)}</span>
      </span>
      <span className="primaryText">{truncate(card.name, {length: 15})}</span>
      <span className="secondaryText">{truncate(card.description, {length: 80})}</span>
    </div>
  );
};

export default PropertyCard;
