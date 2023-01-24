import React from "react";

import { AreaLogin } from "./style";

import {BtnDefaultIcon} from '../../components/Styled';
import { BtnDefault } from '../../components/Styled';

import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/register">

                    <AreaLogin>
                    <h1 class="organize">
                        <Link to='/'><ArrowBackIosIcon/></Link>
                        Crie sua conta
                    </h1>
                    <p>Crie sua conta, é grátis!</p>

                <form>

                <div className="form--input">
                    <label>Nome</label>
                    <input type='name'/>
                </div>

                <div className="form--input">
                    <label>E-mail</label>
                    <input type='email'/>
                </div>

                <div className="form--input">
                    <label>Senha</label>
                    <input type='password'/>
                </div>

                <BtnDefault>
                    Comece agora!
                </BtnDefault>

                <div className="footerLogin">
                    Já tem uma conta? 
                    <Link to='/'>Faça login</Link>
                </div>
            </form>
                    </AreaLogin>
                </Route>

                <Route exact path="*">
                <AreaLogin>
            <h1>Faça login em sua conta</h1>

            <BtnDefaultIcon>
               <FacebookIcon/> 
               <div className="center">Faça login com o Facebook</div>
            </BtnDefaultIcon>

            <BtnDefaultIcon>
               <GoogleIcon/>
               <div className="center">Faça login com o Google</div> 
            </BtnDefaultIcon>

            <p>OU</p>

            <form>
                <div className="form--input">
                    <label>E-mail</label>
                    <input type='email'/>
                </div>

                <div className="form--input">
                    <label>Senha</label>
                    <input type='password'/>
                </div>

                <BtnDefault>
                    Entrar
                </BtnDefault>

                <div className="footerLogin">
                    Não tem uma conta? 
                    <Link to='/register'>Registre-se</Link>
                </div>
            </form>
            </AreaLogin>

                </Route>
            </Switch>
            
        </BrowserRouter>
    );
}