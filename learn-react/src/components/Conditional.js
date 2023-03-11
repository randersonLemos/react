import {useState} from 'react'

function Conditional () {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function sentEmail (e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)

    }

    return(
        <div>
            <h2>Register your e-mail</h2>   
            <form>
                <input type='email' 
                       placeholder='Inform your email'
                       onChange={(e) => setEmail(e.target.value) }
                />
                <button type='submit' onClick={sentEmail}>Sent email</button>
                {userEmail && (
                    <div>
                        <p>The user email is: {userEmail}</p>
                        <button onClick={ (e) => setUserEmail('') }>Clean email</button>
                    </div>
                )}
            </form>
        </div>
        
    )
}

export default Conditional