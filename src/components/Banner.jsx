import React from 'react'
import "../assets/style/banner.css"

function Banner() {
    return (
        <div id='img_banner_home_page' className='pt-5 px-3'>
            <div className='pb-3 pt-5'>
                {/* Nouveau texte avec effet de machine à écrire */}
                <div className="typewriter">
                <div className="subtitle_banner_home pb-4">Gérez vos appareils de manière simple et efficace</div>
                <div className="text_banner_home d-none  d-lg-flex flex-column">
                    <span> Réservez dès aujourd'hui pour une expérience de gestion inoubliable !</span>
                    <span>Découvrez des fonctionnalités avancées pour une gestion efficace de vos smartphones.</span>
                    <span>Votre solution idéale vous attend.</span>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default Banner