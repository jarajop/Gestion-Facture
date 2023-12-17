import React, { useEffect } from 'react';
import "../assets/style/facture.css";
import { useState } from 'react';

function Facture() {
    const [listDepense, setListDepense] = useState([]);
    const [depense, setDepense] = useState({ id: null, libelle: "", montant: 0, date: "" });
    const [Error, setError] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [filteredDate, setFilteredDate] = useState('');

    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('maListeFacture'));
        if (savedList) {
            setListDepense(savedList);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (depense.libelle === "" || depense.montant <= 0 || depense.date === "") {
            setError(true);
            return;
        }

        if (isEditing) {
            const updatedListDepense = listDepense.map(item => (item.id === depense.id ? depense : item));
            setListDepense(updatedListDepense);
            setIsEditing(false);
            setDepense({ id: null, libelle: "", montant: 0, date: "" });
        } else {
            const newDepense = { ...depense, id: Date.now() };
            setListDepense([...listDepense, newDepense]);
            setDepense({ id: null, libelle: "", montant: 0, date: "" });
        }

        setError(false); 

        l
    };

    const handleEdit = (index) => {
        const editedDepense = listDepense[index];
        setDepense({ ...editedDepense });
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        const updatedListDepense = listDepense.filter(item => item.id !== id);
        setListDepense(updatedListDepense);
    };


    const handleFilterByDate = () => {
        const filteredDepenses = listDepense.filter((depense) => depense.date === filteredDate);
        setListDepense(filteredDepenses);
    };

    // useEffect(()=>{
    //     return null
    // },[listDepense])
    return (
        <div className='row'>
            <div className='col-6 shadow-lg p-3 mb-5 bg-body-tertiary rounded '>
                <form onSubmit={handleSubmit} method='post'>
                    <div className="mb-3 ">
                        <h2 className='text-warning pb-4'> Formulaire de gestion depense</h2>

                        <label className="form-label fs-4 text-danger-emphasis">Libellé de la dépense</label>
                        <input placeholder='libellle' type="text" className="form-control" value={depense.libelle} onChange={(e) => setDepense({ ...depense, libelle: e.target.value })} />
                        {Error && depense.libelle === "" ? (
                            <label className='text-danger'> fais pas le malin renseigne le champ je te dis</label>) : ("")}
                    </div>
                    <div className="mb-3">
                        <label className="form-label fs-4 text-danger-emphasis">Montant de la dépense</label>
                        <input type="number" placeholder='montant' className="form-control" value={depense.montant} onChange={(e) => setDepense({ ...depense, montant: e.target.value })} />
                        {Error && depense.montant === 0 ? (
                            <label className='text-danger'> il est requis ce champ donc tu le renseigne okkk</label>) : ("")}
                        {Error && depense.montant <= 0 ? (
                            <label className='text-danger'> j'ai dit des nombres entiers okay</label>) : ("")}

                    </div>

                    <div className="mb-3">
                        <label className="form-label fs-4 text-danger-emphasis  ">Date de la dépense</label>
                        <input type="date" placeholder='date' className="form-control" value={depense.date} onChange={(e) => setDepense({ ...depense, date: e.target.value })} />
                        {Error && depense.date === "" ? (
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
                {/* la on utilise la methode map ki va parcourir le tableau listdepense, recuperer la cle de chak element et 
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
                        {listDepense.map((depense, index) => (
                            <tr key={depense.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{depense.libelle}</td>
                                <td>{depense.montant}</td>
                                <td>{depense.date}</td>
                                <td>
                                    <button onClick={() => handleEdit(index)}>Modifier</button>
                                    <button onClick={() => handleDelete(depense.id)}>Supprimer</button>
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