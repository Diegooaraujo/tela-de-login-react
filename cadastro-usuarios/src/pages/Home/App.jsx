import { useState } from 'react'

import './App.css'
import Trash from '../../assets/trash.svg'

function App() {
  const users = [{
    id: '12121212',
    name: 'Rodolfo',
    age: '20',
    email: 'rod@email.com'
  }, {
    id: '13131313',
    name: 'Rogerio',
    age: '20',
    email: 'rog@email.com'
  }]



  return (
    <>
      <div className='conteiner'>
        <form >
          <h1>cadastro de usuarios</h1>

          <input type="text" name="nome" placeholder='Nome:'/>
          <input type="number" name="idade" placeholder='Idade:'/>
          <input type="email" name="email" placeholder='Email:'/>
          <button type='submit'>Cadastrar</button>
        </form>

        {users.map((user) => (
          <div key={user.id} className='card'>
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade: <span>{user.age}</span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>
            <button><img src={Trash} alt="" /></button>
          </div>
        ))}

      </div>
    </>
  )
}

export default App
