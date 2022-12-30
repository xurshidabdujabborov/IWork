import React from 'react'
import { Container, Grid } from '@mui/material'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import "./Bottom.css"

function Bottom() {
    return (
        <div className='Bottom'>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid md={3} sm={12} xs={12}>
                        <div className="left">
                            <h2 className="title">Ищем в команду
                                IWork.uz</h2>
                            <div className="box">
                                <p className="text">Если вы не нашли то, что искали, <br /> напишите нам на team@IWork.uz.<br /> Возможно, мы просто еще не знаем,  что нам нужны именно вы.</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid md={9} sm={12} xs={12}>
                        <div className="right">
                            <h4><TrendingFlatIcon/>Middle QA тестировщик</h4>
                            <h4><TrendingFlatIcon/>Middle Android разработчик</h4>
                            <h4><TrendingFlatIcon/>Middle Beck-end разработчик</h4>
                            <h4><TrendingFlatIcon/>Middle Front-end разработчик</h4>
                            <a href="#">Другие вакансии</a>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Bottom
