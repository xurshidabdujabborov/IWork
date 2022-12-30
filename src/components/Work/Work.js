import React from 'react'
import { Container, Grid } from '@mui/material'
import wor from "../../assets/wor.png"
import mob from "../../assets/mob.jpg"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "./Work.css"

function Work() {
    return (
        <div className='Work'>
            <Container maxWidth="xl">
                <div className="bacround">
                    <Grid container alignItems={"center"}>
                        <Grid md={6} sm={12} xs={12}>
                            <div className="img">
                                <img src={wor} alt="" />
                            </div>
                        </Grid>
                        <Grid md={6} sm={12} xs={12}>
                           <div className="right">
                           <h2 className="title">
                                Ваш мобильный помощник для поиска специалистов и работы </h2>
                                <p className="text">Скачивайте мобильное приложение IWork.kz и получите доступ ко <br /> всем функциям сервиса, которые недоступны на сайте. </p>
                                <form action="#">
                                    <div className="icon">
                                        <LocalPhoneIcon/>
                                    </div>
                                    <input type="text" placeholder=' +989' />
                                    <div className="click">
                                    <a href="#">Получить ссылку</a>
                                    </div>
                                </form>
                           </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default Work
