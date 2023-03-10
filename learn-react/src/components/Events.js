import Button from './Button'

function Events({number}) {

    function listener(){
        console.log(`I am here from ${number}`)
    }

    return (
        <div>
            <p>Click to trigger the event</p>
            <Button event={listener} text='Primeiro Evento'/>
        </div>

    )
}

export default Events