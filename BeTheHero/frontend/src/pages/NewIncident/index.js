import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const ongID = localStorage.getItem('ongID')

    const history = useHistory()

    async function handleNewIncident(e){
        e.preventDefault()        

        try {
            const response = await api.post('incidents', {
                title,
                description,
                value
            }, {
                headers: {
                    Authorization: ongID,
                }
            })

            console.log(response.data.id)

            history.push('/profile')
        } catch (err) {
            alert('Erro ao cadastrar caso, tente novamente.')          
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver-lo.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para o home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do caso" 
                        value={title} 
                        onChange={e => setTitle(e.target.value)}
                    />                                        
                    <textarea 
                        placeholder="Descrição"
                        value={description} 
                        onChange={e => setDescription(e.target.value)}
                    />                                        
                    <input 
                        placeholder="Valor em reais"
                        value={value} 
                        onChange={e => setValue(e.target.value)}
                    />                                        

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}