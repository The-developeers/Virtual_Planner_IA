import React, { useState } from "react"
import axios from 'axios'

const Register = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleRegister = async () => {
		try {
			const response = await axios.post('/api/register', { username, password})
			alert(response.data.message)
		} catch (error){
			alert(error.response?.data?.message || 'Erro ao cadastrar')
		}
	}

	return (
		<div>
			<h2>Cadastro</h2>
			<input
				type="text"
				placeholder="Usuário"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="password"
				placeholder="Senha"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleRegister}>Cadastrar</button>
		</div>
	)
}

export default Register