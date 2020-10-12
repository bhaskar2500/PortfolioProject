import { TabMenu,TabMenuProps } from 'primereact/tabmenu';
import React from 'react';

import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import '../NavigationBar/NavigationBar.css';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        const url = window.location.href.split("#")[1];
        this.state = {
            activeItem: url.length>1 ? url.replace('/','') :"",
            items: [
                // { label: 'Home', value: 'Home', icon: 'pi pi-fw pi-home', url:'/#/Home'},
                { label: 'Art Work', value: "Artwork", icon: 'pi pi-fw pi-calendar',url:'/#/Artwork' },
                { label: 'Resume', value: 'Resume', icon: 'pi pi-fw pi-pencil',url:'/#/Resume' },
                { label: 'Documentation/Notes', icon: 'pi pi-fw pi-file' ,value:"Documentation",url:"/#/Documentation"},
                { label: 'Projects', value: 'Projects', icon: 'pi pi-fw pi-cog',url:'/#/Projects' }
            ]
        }
        console.log(this.state.activeItem);
    }
    
    render() {
        const activeElement = 
         this.state.items.find(i=>i.value==this.state.activeItem)
        return (
            <div className="NaviagtionContainer">
                <div className="content-section introduction">
                    <div className="feature-intro">
                    </div>
                </div>
                <div className="content-section implementation">
                    <TabMenu  model={this.state.items} activeItem={activeElement} />
                </div>
                {/* what's up */}
            </div>
        )   
    }

}
function NavigationBarContainer(props){
    return (
         <NavigationBar {...props} />
    )
}

export { NavigationBarContainer }