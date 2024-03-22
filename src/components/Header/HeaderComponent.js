import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../asset/logo.svg";
import { LABELS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setLatitude, setLongitude } from "../../store/searchSlice";

const HeaderComponent = () => {
  const [searchPlace, setSearchPlace] = useState("");
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);
  const userName = useSelector((store) => store.user.username);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setLongitude("73.72860"));
    dispatch(setLatitude("18.61610"));
  }, []);

  const handleSearch = async () => {
    const rawData = await fetch(LABELS.SEARCH_BASE_URL + searchPlace);
    const data = await rawData.json();
    getCoordinates(data?.data[0]?.place_id);
  };

  const getCoordinates = async (placeId) => {
    const rawData = await fetch(LABELS.COORDINATES_BASE_URL + placeId);
    const data = await rawData.json();
    dispatch(setLongitude(data?.data[0]?.geometry?.location?.lng));
    dispatch(setLatitude(data?.data[0]?.geometry?.location?.lat));
    navigate("/");
  };

  const handleOnChangeSearch = (event) => {
    setSearchPlace(event.target.value);
  };

  return (
    <>
      <div className="flex justify-between bg-slate-200 shadow-xl sticky top-0 z-10">
        <div className="flex items-center">
          <Link to="/">
            <img className="w-32 h-32" src={Logo} />
          </Link>

          <div className="p-2 m-2">
            <input
              className="p-2 m-2 rounded-lg hover:shadow-lg"
              placeholder="Search Location"
              type="search"
              onChange={handleOnChangeSearch}
            />
            <button
              className="p-2 m-2 border-2 border-black rounded-lg bg-black text-white"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        <ul className="flex items-center p-4 m-4 gap-4 font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({items.length})</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            {userName ? (
              <>
                <span className="m-2 italic">
                  Welcome:- {userName.toUpperCase()}
                </span>
                <Link to="/signup">Logout</Link>
              </>
            ) : (
              <Link to="/signup">Sign Up</Link>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderComponent;
