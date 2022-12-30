import React from 'react'
import { Container, Grid } from '@mui/material'
import car from "../../assets/card 14.png"
import car1 from "../../assets/card 15.png"
import car2 from "../../assets/card 16.png"
import car3 from "../../assets/card 17.png"
import car4 from "../../assets/card 18.png"
import car6 from "../../assets/card 20.png"
import car7 from "../../assets/card 21.png"
import car8 from "../../assets/card 22.png"
import car9 from "../../assets/card 23.png"
import car10 from "../../assets/card 24.png"
import car11 from "../../assets/card 25.png"
import car12 from "../../assets/card 26.png"
import car13 from "../../assets/card 27.png"
import car14 from "../../assets/card 28.png"
import car16 from "../../assets/card 30.png"
import car17 from "../../assets/card 31.png"
import car18 from "../../assets/card 32.png"
import "./Main.css"

function Main() {
    return (
        <main>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid md={3} sm={12} xs={12}>
                        <div className="colomun">
                            <h2 className="title">Как нанять специалиста в Алматы на IWork.kz?</h2>
                            <p className="text">Найдите лучшего специалиста всего за 5 минут!</p>
                        </div>
                    </Grid>
                    <Grid md={9 } sm={12} xs={12}>
                        <div className="box">
                            <div className="card">
                                <span>1</span>
                                <h4>Оставьте заявку</h4>
                                <p className="text">Опишите подробно, какую работу нужно выполнить, чтобы система подобрала для вас специалистов</p>
                            </div>
                            <div className="card">
                                <span>2 </span>
                                <h4>Получите предложения</h4>
                                <p className="text">Специалисты сами свяжутся с вами, выберите лучшего по ценам,  анкетам и отзывам</p>
                            </div>
                            <div className="card">
                                <span>3</span>
                                <h4>Оставьте отзыв</h4>
                                <p className="text">После выполнения работы не забудьте оставить  отзыв выбранному специалисту</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h2 className="title">Услуги по категориям в Алматы</h2>
                <Grid container>
                    <Grid md={3} sm={6} xs={12}>
                        <div className="nan">
                            <img src={car1} alt="" />
                            <h3>Бытовой ремонт</h3>
                            <p className="text">Сантехники, электрики, мебельщики и т.д</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={6} xs={12}>
                        <div className="nan">
                            <img src={car} alt="" />
                            <h3>Pабота программиста</h3>
                            <p className="text">Сантехники, электрики, мебельщики и т.д</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={6} xs={12}>
                        <div className="nan">
                            <img src={car2} alt="" />
                            <h3>Pемонт машин</h3>
                            <p className="text">Сантехники, электрики, мебельщики и т.д</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={6} xs={12}>
                        <div className="nan">
                            <img src={car3} alt="" />
                            <h3>Доставка</h3>
                            <p className="text">Сантехники, электрики, мебельщики и т.д</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={6} xs={12}>
                        <div className="nan">
                            <img src={car4} alt="" />
                            <h3>Банковское дело</h3>
                            <p className="text">Сантехники, электрики, мебельщики и т.д</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={6} xs={12}>
                        <div className="nan">
                            <img src={car17} alt="" />
                            <h3>Спортивный тренер</h3>
                            <p className="text">Сантехники, электрики, мебельщики и т.д</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={6} xs={12}>
                        <div className="nan">
                            <img src={car6} alt="" />
                            <h3>Деловые услуги</h3>
                            <p className="text">Сантехники, электрики, мебельщики и т.д</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={6} xs={12}>
                        <div className="nan">
                            <img src={car7} alt="" />
                            <h3>Услуги здоровья</h3>
                            <p className="text">Сантехники, электрики, мебельщики и т.д</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={6} xs={12}>
                        <div className="nan">
                            <img src={car8} alt="" />
                            <h3>Репетиторы</h3>
                            <p className="text">Сантехники, электрики, мебельщики и т.д</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={6} xs={12}>
                        <div className="nan">
                            <img src={car9} alt="" />
                            <h3>Помощь по дому</h3>
                            <p className="text">Сантехники, электрики, мебельщики и т.д</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={6} xs={12}>
                        <div className="nan">
                            <img src={car10} alt="" />
                            <h3>Бытовой ремонт</h3>
                            <p className="text">Сантехники, электрики, мебельщики и т.д</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={6} xs={12}>
                        <div className="nan">
                            <img src={car11} alt="" />
                            <h3>Бытовой ремонт</h3>
                            <p className="text">Сантехники, электрики, мебельщики и т.д</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={6} xs={12}>
                        <div className="nan">
                            <img src={car12} alt="" />
                            <h3>Репетиторы</h3>
                            <p className="text">Сантехники, электрики, мебельщики и т.д</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={6} xs={12}>
                        <div className="nan">
                            <img src={car13} alt="" />
                            <h3>Танцы и хореография</h3>
                            <p className="text">Сантехники, электрики, мебельщики и т.д</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={6} xs={12}>
                        <div className="nan">
                            <img src={car14} alt="" />
                            <h3>Ремонт и установка техники</h3>
                            <p className="text">Сантехники, электрики, мебельщики и т.д</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={6} xs={12}>
                        <div className="nan">
                            <img src={car18} alt="" />
                            <h3>Уборка и санитария</h3>
                            <p className="text">Сантехники, электрики, мебельщики и т.д</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={6} xs={12}>
                        <div className="nan">
                            <img src={car16} alt="" />
                            <h3>Pемонт</h3>
                            <p className="text">Сантехники, электрики, мебельщики и т.д</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={6} xs={12}>
                        <div className="var">
                            <h3>Более 180 000 мастеров с отзывами</h3>
                            <a href="#">Создать заказ</a>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
}

export default Main
