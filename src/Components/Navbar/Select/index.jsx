import React, { useEffect, useState } from "react";
import { Link } from "../../Footer/style";
import { Navlink } from "../style";
import down from "../../../asset/icons/solid/angle-down.svg";
import { useLocation } from "react-router-dom";

const Select = ({ option }) => {
  const { pathname } = useLocation();
  const [showInfo, setShowInfo] = useState(false);
  const { data, name } = option;
  useEffect(() => {
    setShowInfo(false);
  }, [pathname]);

  const visibleDiv = {
    display: "block",
  };

  const unvisibleDiv = {
    display: "none",
  };

  return (
    <Navlink onClick={() => setShowInfo(!showInfo)} className="howit">
      {name} <img src={down} alt="arrow-icon" />
      <Navlink className="item" style={showInfo ? visibleDiv : unvisibleDiv}>
        {data?.map((item, index) => {
          return <Link key={index}>{item.link}</Link>;
        })}
      </Navlink>
    </Navlink>
  );
};
export default Select;
