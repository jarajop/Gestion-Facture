import "../assets/style/filtre.css"
import { Icon } from '@iconify/react';


function Filtre() {

    return (

       <div id="landing_page" className="d-flex justify-content-center align-items-center " >
         <form action="" >
            <div className="filtre_backdrop  px-4 py-4 ">
            <div className="d-flex align-items-center justify-content-between filtre_circuit">
                <div className=' depart  mr-3 '>
                    <label className='d-flex justify-content-start fw-bold'> Depart</label>
                    <div className='d-flex align-items-center'>
                        <Icon icon="icon-park-outline:local" color="#f24873" width="26" height="26" />
                        <input type="text" placeholder='depart' className='form-control input_circuit ' />
                    </div>
                </div>

                <div className=' depart ml-5'>
                    <label className='d-flex justify-content-start fw-bold'> Depart</label>
                    <div className='d-flex align-items-center'>
                        <Icon icon="icon-park-outline:local" color="#f24873" width="26" height="26" />
                        <input type="text" placeholder='depart' className='form-control input_circuit ' />
                    </div>
                </div>
                <button className="search_button d-flex mt-4 ml-3"> Rechercher</button>

            </div>
            </div>

        </form>
       </div>
    )
}

export default Filtre