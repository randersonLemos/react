import styles from './Person.module.css'

function Person(props) {
    return(
        <div className={styles.personContainer} >
            <img src={props.photo} alt={props.name} />
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Labor: {props.labor}</p>
        </div>
    )


}

export default Person