const url =
  "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json";

export const addCar = (car) => {
  return {
    type: "ADD_CAR",
    value: car,
  };
};

export const removeCar = (index) => {
  return {
    type: "REMOVE_CAR",
    value: index,
  };
};
export const fetchMakes = () => {
  return (dispatch) => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        const action = {
          type: "FETCH_MAKES",
          value: response.Results,
        };
        console.log(action);
        dispatch(action);
      });
  };
};
export const deleteMake = (id) => {
  console.log(id,"delete make")
  return {
    type: "REMOVE_MAKE",
    value: id,
  };
};
