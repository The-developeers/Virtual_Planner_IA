import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	const handleLogin = async () => {
		try {
			const response = await axios.post('/api/login', { username, password})

			alert(response.data.message)

			navigate('/home')
		} catch (error) {
			alert(error.response?.data?.message || 'Erro ao fazer login')
		}
	}

	return (
		<div>
			<h2>Login</h2>
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
			<button onClick={handleLogin}>Login</button>
			<p>
				Não tem uma conta? <a href="/register">Cadastre-se</a>
			</p>
		</div>
	)
}

export default Login