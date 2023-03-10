import { useState } from 'react'

function Form () {
    function registerUser (e) {
        e.preventDefault()
        console.log(name)
    } 

    const [name, setName] = useState()


    return (
        <div>
            <form onSubmit={registerUser}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input 
                        type='text' 
                        id="name" 
                        name="name" 
                        placeholder='What is your name'
                        onChange={(e) => setName(e.target.value)}
                    />
                   
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type='password' id="password" name="password" placeholder='Infor your password'></input>
                </div>
                <div>
                    <input type='submit' value='Register'></input>
                </div>
            </form>
        </div>
    )
}

export default Form