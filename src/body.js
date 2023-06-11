import React, { useEffect, useState } from "react";
//  import { Restrocards } from "./restrocard";
import { restrolists } from "./restrolists";


const Restrocards = (props) => {
  // here we can use object destructing instead of passing props , here we can pass {restro} as a  place of props and can use this by object destructure like {restroname,cusines,timings,image }=restro and can use this directly like {redtrname }
  // console.log(props);
  return (
    <>
      <div className="body_conatiner">
        <div className="cards">
          <img
            src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_140,h_140,c_fill/"+props.restro?.cloudinaryImageId}
            alt="img"
            className="restro_Image"
          />
          <h3 className="restroname ">{props.restro?.name} </h3>
          <h5 className="cusinies">{props.restro?.cuisines}</h5>
          <br />
          <h6 className="timing">
          
            lastMileTravelString:{props.restro?.lastMileTravelString}
          </h6>
        </div>
      </div>
    </>
  );
};
const Body = () => {
  const [restaurant, setrestaurant] = useState(restrolists);
  const [searchvalue, setSearchvalue] = useState();
  // const[btn, setBtn]=useState()
  function InputEvent(event) {
    setSearchvalue(event.target.value);
  }

  function filterData(searchvalue, restaurant) {
    const filterrestro = restaurant.filter((restaurant) =>
      restaurant.name.includes(searchvalue)
    );
    return filterrestro;
  }
  useEffect(() => {
    Apidata();
  }, []);
  async function Apidata() {
    const rdata = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.1919738&lng=76.6190774&page_type=DESKTOP_WEB_LISTING"
    );
    const restrodata = await rdata.json();
    console.log(restrodata.data?.cards[0].data?.data?.cards);
    setrestaurant(restrodata.data?.cards[0].data?.data?.cards)
  }

  return (
    <>
      <input
        type="text"
        className="searcharea"
        value={searchvalue}
        onChange={InputEvent}
      />
      <button
        onClick={() => {
          const data = filterData(searchvalue, restaurant);
          setrestaurant(data);
        }}
      >
        search me
      </button>
      <h1>{searchvalue}</h1>
      <div className="restrolist">
        {restaurant.map((Restaurants) => {
          return (
            <Restrocards
              restro={Restaurants.data}
              key="index"
            />
          );
        })}
      </div>
    </>
  );
};
export default Body;
