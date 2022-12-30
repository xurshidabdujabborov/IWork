import React from 'react'
import { Container , Grid } from '@mui/material'
import logo from "../../assets/logo.png"
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid md={2} sm={12} xs={12}>
                        <div className="left">
                            <a href="#">IWork.uz</a> <br />
                            <span>© 2022 ТОО «IWork.uz»</span>
                            <p className="text">При использовании любых материалов ссылка на сайт naimi.kz обязательна</p>
                        </div>
                    </Grid>
                    <Grid md={2} sm={6} xs={12}>
                        <ul>
                            <li>
                                <a href="#">Вакансии</a>
                            </li>
                            <li>
                                <a href="#">Блог</a>
                            </li>
                            <li>
                                <a href="#">Контакты</a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid md={2} sm={6} xs={12}>
                        <ul>
                            <li>
                                <a href="#">Стать специалистом</a>
                            </li>
                            <li>
                                <a href="#">Частые вопросы</a>
                            </li>
                            <li>
                                <a href="#">Условия использования</a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid md={2} sm={6} xs={12}>
                        <ul>
                            <li>
                                <a href="#">Выбор города</a>
                            </li>
                            <li>
                                <a href="#">Войти в аккаунт </a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid md={2} sm={6} xs={12}>
                        <ul>
                            <li>
                                <a href="#">Мы в Instagram</a>
                            </li>
                            <li>
                                <a href="#">Мы в Facebook</a>
                            </li>
                            <li>
                                <a href="#">Мы в Telegram</a>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer
