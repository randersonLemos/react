function Form () {
    function registerUser (e) {
        e.preventDefault()
        console.log('Registered')
    }


    return (
        <div>
            <form onSubmit={registerUser}>
                <div>
                    <input type='text' placeholder='What is your name'></input>
                </div>
                <div>
                    <input type='submit' value='Register'></input>
                </div>
            </form>
        </div>
    )
}

export default Form