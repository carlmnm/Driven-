import styled from "styled-components"
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios"

export default function UserLogin() {
    const { setAndPersistToken } = useContext(UserContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function login(e) {
        e.preventDefault()
        const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login"
        const body = { email, password }

        const promise = axios.post(URL, body)
        promise.then((res) => {
            console.log("deu certo")
            setAndPersistToken(res.data.token)
        })
        promise.catch((err) => {
            console.log(err.data.message)
        })
    }
    return (
        <ContainerForm>
            <form onSubmit={login}>
                <Input
                    type="email"
                    placeholder="e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <ButtonLogin type="submit">
                    {"Entrar"}
                </ButtonLogin>
            </form>
        </ContainerForm>
    )
}

{/*styled components*/ }

const ContainerForm = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 299px;
`

const Input = styled.input`
width: 299px;
height: 52px;
background-color: #FFFFFF;
border-radius: 8px;
padding-left: 14px;
margin-bottom: 16px;
::placeholder{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #7E7E7E;
}
`

const ButtonLogin = styled.button`
width: 298px;
height: 52px;
background: #FF4791;
border-radius: 8px;
margin-top: 8px;
`