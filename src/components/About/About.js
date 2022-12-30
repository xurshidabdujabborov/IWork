import React from 'react'
import { Container, Grid } from '@mui/material'
import car from "../../assets/card 35.png"
import car1 from "../../assets/card 36.png"
import car3 from "../../assets/card 33.png"
import car4 from "../../assets/card 34.png"
import car5 from "../../assets/card 4.png"
import car6 from "../../assets/work.webp"
import "./About.css"

function About() {
    return (
        <div className='About'>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid md={6} sm={12} xs={12}>
                        <div className="box">
                            <div className="card">
                                <img src={car} alt="" />
                                <h2 className="title">0 ₸</h2>
                                <h4>бесплатный период</h4>
                                <p className="text">Для всех новых специалистов IWork.uz дает бесплатный период попробовать сервис</p>
                            </div>
                            <div className="card">
                                <img src={car1} alt="" />
                                <h2 className="title">0%</h2>
                                <h4>комиссия</h4>
                                <p className="text">IWor.uz не берет комиссию с заказов, специалисты оплачивают только доступ к </p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="card">
                                <img src={car3} alt="" />
                                <h2 className="title">0 ₸</h2>
                                <h4>ваш сайт + реклама</h4>
                                <p className="text">Используйте свою анкету как личный сайт с отзывами клиентов, которые послужат лучшей рекламой для вас</p>
                            </div>
                            <div className="card">
                                <img src={car4} alt="" />
                                <h2 className="title">0 ₸</h2>
                                <h4>от 300 тыс.
                                    доход</h4>
                                <p className="text">Специалисты, которые поняли, что работа на репутацию приносит деньги, уже вышли на доход от</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid md={6} sm={12} xs={12}>
                        <div className="right">
                            <img src={car6} alt="" />
                            <div className="text">
                                <button>Для специалистов</button>
                                <h2 className="title">Работа в IWork.kz</h2>
                                <p>Зарегистрируйтесь в Naimi.kz и получайте <br /> тысячи заказов и сотни вакансий ежедневно.</p>
                                <a href="#">Подробнее о работе в IWork.kz</a>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default About
