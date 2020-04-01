import React, {Component} from 'react';
import AppRouter from './routes/index';
import { slide as Menu } from 'react-burger-menu';
class App extends Component {
    render() {
        return (
            <div id="outer-container">
                <Menu pageWrapId={ "page-wrap" } outerContainerId={ "App" } />
                <main id="page-wrap">
                    < AppRouter />
                </main>
            </div>
            
    )
        ;
    }
}

export default App;
