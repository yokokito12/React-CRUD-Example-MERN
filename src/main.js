import React from 'react';
import {Home} from './components/home/home';
import {Container} from 'react-materialize';
import FooterLocal from './components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const users = [
    {
        id: 1,
        nome: "Adilson Quifucussa",
        cargo: "PHP Developer",
        foto: require("./imagens/quifu.png"),
        resumo: "Programador nascido aos 12-12-2012, cidade de Luanda formado em ciencia da computacao.",
        experience: [
            {
                company: "Tis Tech",
                title: "CEO de sei quê",
                description: "Programador nascido aos 12-12-2012, cidade de Luanda formado em ciencia da computacao.",
                avatar: require("./imagens/check.png")
            },
            {
                company: "SoundCloud",
                title: "Programador",
                description: "Programador, cidade de Luanda formado em ciencia da computacao.",
                avatar: require("./imagens/company.png")
            }
        ]
    },
    {
        id: 2,
        nome: "José D. Fortuna",
        cargo: "SharePoint Developer",
        foto: require('./imagens/fortuna.png'),
        resumo: "Programador Share Point nascido aos 07/07/2018 formado em tecnologia de informacao",
        experience: [
            {
                company: "Tis Tech",
                title: "CEO de sei quê",
                description: "Descrição dele lá",
                avatar: require("./imagens/check.png")
            },
            {
                company: "Twitter",
                title: "Programador",
                description: "Descrição dele lá 2",
                avatar: require("./imagens/company2.png")
            }
        ]
    },
    {
        id: 3,
        nome: "Henriques Salucamba",
        cargo: "PGCO Builder",
        foto: require("./imagens/enriques.png"),
        resumo: "Programador Share Point nascido aos 07/07/2018 formado em tecnologia de informacao",
        experience: [
            {
                company: "Tis Tech",
                title: "CEO de sei quê",
                description: "Descrição dele lá",
                avatar: require("./imagens/check.png")
            },
            {
                company: "Facebook",
                title: "CEO de sei quê",
                description: "Descrição dele lá",
                avatar: require("./imagens/Facebook.png")
            }
        ]
    }
];

const Main =()=>(
    <main>
        <div className="container" >
            <Home users={users} />
       
        
        </div><FooterLocal users={users} />
    </main>
);

export default Main;