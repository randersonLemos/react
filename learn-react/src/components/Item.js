import PropTypes from 'prop-types'


function Items({ brand, release }){
    return(
        <>
            <h2>The brand {brand} was released in {release} </h2>
        </>
    )
}

Items.propTypes = {
    brand: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired
}

Items.defaultProps = {
    brand: 'Tip'
}

export default Items