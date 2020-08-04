import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://cdn.icon-icons.com/icons2/1368/PNG/512/-avatar_89781.png" alt="Avatar"/>
                <div>
                    <strong>Julio Cesar</strong>
                    <span>Informática</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias do mundo e do uninverso atual.<br /><br />
                Apaixado por escrever códigos e mais linhas de código, sem parar. Afim de solucionar os problemas do mundo e de toda a humanidade atual.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 220,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whastapp"/>
                    Entrar em Contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;