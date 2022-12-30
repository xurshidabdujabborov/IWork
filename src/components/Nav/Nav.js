import React from "react";
import { Grid, Container } from "@mui/material";
import logo from "../../assets/logo.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./Nav.css";

function Nav(props) {
  return (
    <nav>
      <div className="navTop">
        <Container maxWidth="xl">
          <Grid container alignItems={"center"}>
            <Grid md={2} sm={12} xs={12}>
              <div className="logo">
                <img src={logo} alt="" />
              </div>
            </Grid>
            <Grid md={10} sm={12} xs={12}>
              <div className="right">
                <form action="#">
                  <select name="#" id="#">
                    <option value="#">EN</option>
                    <option value="#">RU</option>
                    <option value="#">UZ</option>
                  </select>
                </form>
                <a href="#" className="sigin_up">Boйти</a>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </nav>
  );
}

export default Nav;
