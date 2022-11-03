let homes=[
    {
        id:"0",
        location:"jerusalem, beit hanina",
        parking:"yes",
        balconies:"2",
        numberOfRooms:"3",
        surfaceArea:"100km2",
        furniture:"yes",
        NewlyBuild:"yes",
        photos:"home1.jpg",
        ownerName:"Samira Rassas",
        ownerDetails:"0686748532",
        available:"yes",
        timesRentedBefore:"1",
        cost:"6000 shekel",
        status:"reserved"

    },
    {
        id:"1",
        location:"jerusalem, sheikh jarrah",
        parking:"no",
        balconies:"3",
        numberOfRooms:"2",
        surfaceArea:"150km2",
        furniture:"no",
        NewlyBuild:"no",
        photos:"home2.jpg",
        ownerName:"Sandra Murad",
        ownerDetails:"0534566788",
        available:"yes",
        timesRentedBefore:"3",
        cost:"5000 shekel",
        status:"in progress"

    },
    {
        id:"2",
        location:"jerusalem, beit safafa",
        parking:"yes",
        balconies:"1",
        numberOfRooms:"2",
        surfaceArea:"120km2",
        furniture:"no",
        NewlyBuild:"yes",
        photos:"home3.jpg",
        ownerName:"Khalil Rassas",
        ownerDetails:"0532456677",
        available:"no",
        timesRentedBefore:"2",
        cost:"5500 shekel",
        status:"available"

    },
    {
        id:"3",
        location:"jerusalem, ras al amud",
        parking:"no",
        balconies:"1",
        numberOfRooms:"4",
        surfaceArea:"170km2",
        furniture:"no",
        NewlyBuild:"no",
        photos:"home5.jpg",
        ownerName:" Samira Rassas",
        ownerDetails:"0532456677",
        available:"no",
        timesRentedBefore:"2",
        cost:"5500 shekel",
        status:"available"

    }
    
];
export function getHomes() {
    return homes;
  }
  export function getHomesbyId(id)  {
    return homes.find(
        (home) => home.id === id
          );  
  }
export function getHomesByLocation(location) {
    return homes.filter(
        (home) => homes.location === location
    );
  }
//   export function getHomesByDetails(location) {
//     return homes.filter(
//         (home) => homes.location === location
//     );
//   }

export function getHomesbydetails() {
    return homes;
  }

  export function getHomesbydetail(id) {
   return homes.find(
  (home) => home.id === id
    );
   }