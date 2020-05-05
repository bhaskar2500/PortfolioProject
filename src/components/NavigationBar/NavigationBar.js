import { TabMenu } from 'primereact/tabmenu';

import React, { useReducer } from 'react';


import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import '../NavigationBar/NavigationBar.css';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem:'',
            items: [
                // { label: 'Home', value: 'Home', icon: 'pi pi-fw pi-home', url:'/#/Home'},
                { label: 'Art Work', value: "Artwork", icon: 'pi pi-fw pi-calendar',url:'/#/Artwork' },
                { label: 'Resume', value: 'Resume', icon: 'pi pi-fw pi-pencil',url:'/#/Resume' },
                { label: 'Documentation', icon: 'pi pi-fw pi-file' ,value:"Documentation",url:"/#/Documentation"},
                { label: 'Projects', value: 'Projects', icon: 'pi pi-fw pi-cog',url:'/#/Projects' }
            ]
        }
    }
    
    render() {
        return (
            <div className="NaviagtionContainer">
                <div className="content-section introduction">
                    <div className="feature-intro">
                    </div>
                </div>
                <div className="content-section implementation">
                    <TabMenu  model={this.state.items} />
                </div>
                {/* what's up */}
            </div>
        )
    }

}

export { NavigationBar }