import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import InputRange from "../../components/InputRange/InputRange";

import "./Properties.css";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
const Properties = () => {
  const { dataProperties, isError, isLoading, images } = useProperties();
  const [filter, setFilter] = useState("");
  const [valueMin, setValueMin] = useState("");
  const [valueMax, setValueMax] = useState("");
  const [ dataFiltered, setDataFiltered ] = useState(dataProperties);

  useEffect(() => { 
    console.log('actualizado',dataProperties)
    setDataFiltered(dataProperties);
  }, [dataProperties])


  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }



  const handleFilter = () => {
    console.log('dataProperties--',valueMin, valueMax);
    let newData = dataProperties
    .filter(
      (property) =>
        property?.name.toLowerCase().includes(filter.toLowerCase()) ||
        property?.address.toLowerCase().includes(filter.toLowerCase())
    );
    newData = newData.filter(
      (property) =>
        (valueMin === '' || property?.price >= parseFloat(valueMin)) &&
        (valueMax === '' || property?.price <= parseFloat(valueMax))
    );
    console.log('newData--',newData);
    setDataFiltered(newData)
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }
  console.log('finilmi ',dataProperties);
  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">

        <div className="flexCenter search-bar" style={{width: '100%'}}>
          <SearchBar filter={filter} setFilter={setFilter} />
          <InputRange valueMax={valueMax} valueMin={valueMin} setValueMax={setValueMax} setValueMin={setValueMin}/>
          <button className="button" onClick={()=>handleFilter()}>Buscar</button>
        </div>


        <div className="paddings flexCenter properties">
          {
            // data.map((card, i)=> (<PropertyCard card={card} key={i}/>))

            dataFiltered
            //dataProperties
              .map((card, i) => (
                <PropertyCard card={card} key={i} />
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default Properties;
