import React from 'react';
import about from '../pages/about';
import home from '../pages/home';
import Menu from '../component/menu';
import ItemListContainer from '../components/ItemListContainer';
import { BrowserRoute, Switch, Router } from 'react-router-dom';
import UserName from '../component/UserName';
import ItemDetailContainer from '../components/ItemDeatailContainer'
import IdProduct from '../components/IdProduct';
import ItemDetailContainerArray from '../components/ItemDetailCointeinerArray';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <div className="container">
                    <div className="row justify-content-center">
                        <Router exact path="/" component={Home} />
                        <Router exact path="/AboutUs" component={AboutUs} />
                        <Router exact path="/Productos" component={Productos} />
                        <Router 
                        exact path="/Productos/detail/:IdProduct" component={ItemDetailCointainer} >
                        <Router 
                        exact path="/Productos2/detail/:IdProduct" component={ItemDetailCointainerArray} > 
                        </Router>
                        <IdProduct/>
                        </Router>
                    </div>
                </div>
            </Switch>
        </Router>
    )
}