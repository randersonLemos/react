function Events({number}) {

    function listener(){
        console.log(`I am here from ${number}`)
    }

    return (
        <div>
            <p>Click to trigger the event</p>
            <button onClick={listener}>Activate!</button>
        </div>

    )
}

export default Events