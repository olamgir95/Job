import React, { useEffect, useState } from "react";
import { Footer_menu, Item, Link } from "../style";
import up from "../../../asset/icons/solid/angle-up.svg";
import down from "../../../asset/icons/solid/angle-down.svg";
import facebook from "../../../asset/icons/brands/facebook-f.svg";
import twitter from "../../../asset/icons/brands/twitter.svg";
import { useLocation } from "react-router-dom";

const Select = ({ option }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { data, name } = option;
  const { pathname } = useLocation();

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
    <Footer_menu>
      <Item onClick={() => setShowInfo(!showInfo)}>
        {name}
        {pathname.includes("/home") ? (
          <img src={showInfo ? up : down} alt="arrow-icon" />
        ) : (
          ""
        )}

        <Item
          style={
            pathname.includes("/home")
              ? showInfo
                ? visibleDiv
                : unvisibleDiv
              : visibleDiv
          }
        >
          {data?.map((item, index) => {
            return (
              <Link key={index}>
                {item.label === "facebook" ? (
                  <img alt="ar" src={facebook} />
                ) : item.label === "twitter" ? (
                  <img alt="ar" src={twitter} />
                ) : (
                  item.label
                )}
              </Link>
            );
          })}
        </Item>
      </Item>
    </Footer_menu>
  );
};
export default Select;
