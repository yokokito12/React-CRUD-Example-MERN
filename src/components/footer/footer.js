import React from 'react';
import {Footer} from 'react-materialize';


const FooterLocal = props => ( 
    <main>
   <Footer
        className="example"
        copyrights="&copy 2020 Copyright Text"
        links={<ul>
        {props.users.map((user, i) => {
            return (<li><a className="grey-text text-lighten-3" href={'#' + user.id}>{user.nome}</a></li>)
        })}
       </ul>}

        moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
        >
            <h5 className="white-text">
                Tistech Profiles
            </h5>
            <p className="grey-text text-lighten-4">
                Thanks For Visiting The Page, This page contain profiles of sames employees working under Tistech
            </p>
            </Footer>
    </main>
);

export default FooterLocal;