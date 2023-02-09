import React, { useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCountry } from "../../slices/singleCountrySlice";
import {BsArrowLeft} from 'react-icons/bs'
import "./SingleCountry.css";

const SingleCountry = () => {
  const Navigate =useNavigate();
  const dispatch = useDispatch();
  const { country } = useSelector((state) => state.singleCountry);
  const { name } = useParams();
  console.log(country);
  useEffect(() => {
    dispatch(fetchSingleCountry(name));
  }, []);
  return (
    <div className="country-wrapper">
     <div className="button1">
      <button id="button" onClick={()=>Navigate('/')}><BsArrowLeft/>Back</button>
     </div>
<div className="container">
<div className="countryimg">
        <img src={country && country.length && country[0]?.flags?.svg} alt="" />
      </div>
      <div className="para">
        <div className="right">
          <h1>
            {country && country.length && country[0].name}
          </h1>
          <p>
            <b>Native Name: </b>
            <span>{country && country.length && country[0].nativeName}</span>
          </p>
          <p>
            <b>Population: </b>
            <span>{country && country.length && country[0].population}</span>
          </p>
          <p>
            <b>Region: </b>
            <span>{country && country.length && country[0].region}</span>
          </p>
          <p>
            <b>Sub Region: </b>
            <span>{country && country.length && country[0].subregion}</span>
          </p>
          <p>
            <b>Capital: </b>
            <span>{country && country.length && country[0].capital}</span>
          </p>

        </div>
        <div className="left">
          <p>
            <b>Top Level Domain: </b>
            <span>
              {country && country.length && country[0].topLevelDomain}
            </span>
          </p>
          <p>
            <b>Currencies: </b>
            {country &&
              country.length &&
              country[0]?.currencies.map((cur, index) => {
                return (
                  <span>
                    {cur.name}
                    {index === country[0]?.currencies.length - 1 ? "" : ","}
                  </span>
                );
              })}
          </p>
          <p>
            <b>Languages: </b>
            {country &&
              country.length &&
              country[0]?.languages.map((lan, index) => {
                return (
                  <span>
                    {lan.name}
                    {index === country[0]?.languages.length - 1 ? "" : ","}
                  </span>
                );
              })}
          </p>
        </div>
      </div>
</div>
<p style={{marginLeft:"46.1rem", marginTop:"-40px"}}>
            <b>Border Countries: </b>
            {/* <span>{country && country.length && country[0].borders}</span> */}
            {country && country.length && country[0]?.borders.map((border, index) => {
                return <span id="index-borders">
                {border} 
                <span id="index">{index === country[0]?.borders.length - 1 ? "" : " " }</span>
                </span>
              })}
          </p>
    </div>
  );
};

export default SingleCountry;
