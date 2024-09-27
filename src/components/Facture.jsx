import React,{  useEffect } from 'react';
import "../assets/style/facture.css";
import { useState } from 'react';

function Facture() {
    const [listFacture, setListFacture] = useState([]);
    const [facture, setFacture] = useState({ id: null, libelle: "", montant: 0, date: "" });
    const [Error, setError] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [filteredDate, setFilteredDate] = useState('');

    useEffect(() => { 
        // console.log(listFacture);
        if (listFacture.length >0) {
            
            localStorage.setItem('items', JSON.stringify(listFacture)); //l'ajout de paires clé-valeur à localStorage :
        }
      }, [listFacture]); // la c le second argument

    //Le useEffect()hook nous aide à récupérer tous les éléments lors du premier rendu, ce qui signifie que lorsque le composant est
    // monté ou restitué, il obtient toutes nos données de localStorage.

    useEffect(() => {
        const listFacture = JSON.parse(localStorage.getItem('items'));
        if (listFacture) {
            setListFacture(listFacture);
        }
      }, []);
      //Il est important de se rappeler que lorsque nous avons stocké les données, nous les avons d'abord converties en chaîne JSON.
      // Cela signifie que pour pouvoir l'utiliser maintenant, nous devons reconvertir la chaîne JSON en objet JSON. Nous faisons cela avec la JSON.parse()méthode.

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const isFormInvalid = facture.libelle === "" || facture.montant <= 0 || facture.date === "";
        if (isFormInvalid) {
            setError(true);
            return;
        }
    
        const updatedListFacture = isEditing
            ? listFacture.map(item => (item.id === facture.id ? facture : item))
            : [...listFacture, { ...facture, id: Date.now() }];
    
        setListFacture(updatedListFacture);
        setIsEditing(false);
        setFacture({ id: null, libelle: "", montant: 0, date: "" });
        setError(false);

    };
    

    const handleEdit = (index) => {
        const editedFacture = listFacture[index];
        setFacture({ ...editedFacture });
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        const updatedListFacture = listFacture.filter(item => item.id !== id);
        setListFacture(updatedListFacture);
    };


    const handleFilterByDate = () => {
        const filteredFactures = listFacture.filter((facture) => facture.date === filteredDate);
        setListFacture(filteredFactures);

        
    };
    const SommeMontants = () => {
        return listFacture.reduce((total, item) => total + parseInt(item.montant), 0);
     };
     
    



    return (
        <div className='row'>
            <div className='col-6 shadow-lg p-3 mb-5 bg-body-tertiary rounded '>
                <form onSubmit={handleSubmit} method='post'>
                    <div className="mb-3 ">
                        <h2 className='text-warning pb-4'> Formulaire de gestion de facture</h2>

                        <label className="form-label fs-4 text-danger-emphasis">Libellé de la dépense</label>
                        <input placeholder='libellle' type="text" className="form-control" value={facture.libelle} onChange={(e) => setFacture({ ...facture, libelle: e.target.value })} />
                        {Error && facture.libelle === "" ? (
                            <label className='text-danger'> fais pas le malin renseigne le champ je te dis</label>) : ("")}
                    </div>
                    <div className="mb-3">
                        <label className="form-label fs-4 text-danger-emphasis">Montant de la facture</label>
                        <input type="number" placeholder='montant' className="form-control" value={facture.montant} onChange={(e) => setFacture({ ...facture, montant: e.target.value })} />
                        {Error && facture.montant === 0 ? (
                            <label className='text-danger'> il est requis ce champ donc tu le renseigne okkk</label>) : ("")}
                        {Error && facture.montant <= 0 ? (
                            <label className='text-danger'> j'ai dit des nombres entiers okay</label>) : ("")}

                    </div>

                    <div className="mb-3">
                        <label className="form-label fs-4 text-danger-emphasis  ">Date de la dépense</label>
                        <input type="date" placeholder='date' className="form-control" value={facture.date} onChange={(e) => setFacture({ ...facture, date: e.target.value })} />
                        {Error && facture.date === "" ? (
                            <label className='text-danger'> il est egalement requis ce champ donc saisit le </label>) : ("")}
                    </div>
                    <div className="mb-3">
                        <label className="form-label fs-4 text-danger-emphasis">Filtrer par date</label>
                        <input type="date" className="form-control" value={filteredDate} onChange={(e) => setFilteredDate(e.target.value)} />
                        <button type="button" onClick={handleFilterByDate}>Filtrer</button>
                    </div>
                    <button type="submit" className="btn btn-success" onClick={(e) => handleSubmit(e)}>{isEditing ? "Modifier" : "Ajouter"} dépense</button>


                </form>
            </div>
            <div className='col-6 shadow p-3 mb-5 bg-body-tertiary rounded ml-3'>
                <h2 className='text-primary pb-4'> La liste des dépenses</h2>
                <div><h3>Somme totale des montants : {SommeMontants()}</h3></div>

                {/* la on utilise la methode map ki va parcourir le tableau listfacture, recuperer la cle de chak element et 
l'afficher dans la balise paragraphe */}

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Libellé</th>
                            <th scope="col">Montant</th>
                            <th scope="col">Date</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listFacture.map((facture, index) => ( // listDe f maj
                            <tr key={facture.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{facture.libelle}</td>
                                <td>{facture.montant}</td>
                                <td>{facture.date}</td>
                                <td>
                                    <button onClick={() => handleEdit(index)}>Modifier</button>
                                    <button onClick={() => handleDelete(facture.id)}>Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default Facture;

// ce code marche tres bien avc filtre , modifier et supprimer