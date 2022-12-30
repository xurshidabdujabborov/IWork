import React from 'react'
import { Container, Grid } from '@mui/material'
import car from "../../assets/card 3.png"
import car1 from "../../assets/card 2.png"
import car2 from "../../assets/card 1.png"
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Header.css"

function Header() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,  
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <header>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid md={6} sm={12} xs={12}>
                        <div className="left">
                            <a className='active' href="#">Найти специалистов</a>
                            <a href="#"> Найти работу</a>
                            <h2 className="title">Лучшие специалисты <span> в Алматы</span> <br /> с отзывами и ценами </h2>
                            <form action="#">
                                <div className="icon">
                                    <SearchIcon />
                                </div>
                                <input type="text" placeholder='Поиск специалистов' />
                                <Button variant="contained">Оставить заяавку</Button>
                            </form>
                        </div>
                    </Grid>
                    <Grid md={6} sm={12} xs={12}>
                        <div className="right">
                        <Slider {...settings}>
                            <div className="img">
                                <img src={car} alt="" />
                            </div>
                            <div className="img">
                                <img src={car1} alt="" />
                            </div>
                            <div className="img">
                                <img src={car2} alt="" />
                            </div>
                        </Slider>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </header>
    )
}

export default Header