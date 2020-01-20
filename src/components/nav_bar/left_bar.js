import React from 'react'
import {SideNav, SideNavItem, Button} from 'react-materialize';


const Leftbar =()=>(
    <div>
      <SideNav options={{
      closeOnClick: true
    }}
        trigger={<Button className="dark-green"
        floating
        icon={<icon>add</icon>}
        large
    
    ></Button>}
  >
    <SideNavItem
      user={{
        background: 'https://placeimg.com/640/480/tech',
        email: 'jose.fortuna@tistech.co.ao',
        image: require('../../imagens/fortuna.png'),
        name: 'Jose Fortuna'
      }}
      userView
    />
     <SideNavItem
         href="#!icon"
           icon="cloud"
                >
                     First Link With Icon
          </SideNavItem>
      <SideNavItem href="#!second">
                         Second Link
              </SideNavItem>
        <SideNavItem divider />
            <SideNavItem subheader>
                Subheader
              </SideNavItem>
                <SideNavItem
                  href="#!third"
                  waves
                >
      Third Link With Waves
    </SideNavItem>
  </SideNav>
</div>
  );

export default Leftbar;
