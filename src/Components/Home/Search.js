// // {location,furn, park,num, item}
// import React from "react";
// const  Search=({fltr})=>{
//     console.log(JSON.stringify({fltr}))
//     return(
//         <>
//         <div>Hi</div>
//         </>
//     )

// }
// export default Search;
import { NavLink, Outlet, useSearchParams, } from "react-router-dom";
import { getHomesbydetails } from "../../data/homes.js";

export default function SearchParam() {
  let home = getHomesbydetails();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div >
      <nav>
        <input  type="text" id="srchin" placeholder="Enter Location"
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {home
          .filter((home) => {
            let filter = searchParams.get("filter");
            if (!filter) return false;
            let location = home.location.toLowerCase();
            return location.includes(filter.toLowerCase());

          })

          .map((homes) => (
            <NavLink
              style={({ isActive }) => ({
                display: "block",
                margin: "2rem 0",
                textAlign: "center",
                color: isActive ? "red" : "",
              })}
              to={`/search/${homes.homes}`}
              key={homes.homes}

            >

              <p>location:  {homes.location}</p> id: {homes.id}
              {/* <p>numberOfRooms: {homes.numberOfRooms}</p>
        <p>parking:{homes.parking}</p>
                <p>balconies:{homes.balconies} </p>
                <p>surfaceArea{homes.surfaceArea}</p>
                <p>furniture:{homes.furniture}</p>
                <p>NewlyBuild:{homes.NewlyBuild}</p>
                <p>photos{homes.photos}</p>
                <p>ownerName :{homes.ownerName}</p>
                <p>ownerDetails :{homes.ownerDetails}</p>
                <p>available :{homes.available}</p>
                <p>timesRentedBefore :{homes.timesRentedBefore}</p>
                <p>cost :{homes.cost}</p>
                <p>status :{homes.status}</p> */}

            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
};

