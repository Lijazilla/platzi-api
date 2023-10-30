import './characters.css'

function Characters({ characters = [] }) {
    if (characters) {
        return (
            <div className="row">
                {characters.map((item, index) => (
                    <div key={index} className="col-md-3 mb-4">
                        <div className="card shadow">
                            <img src={item.image} alt="Image of Rick And Morty Characters" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <hr />
                                <div className="location-info">
                                    <p>Location: {item.location.name}</p>
                                </div>
                                <p>Status: {item.status}</p>
                                <p>Species: {item.species}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="col" />
            </div>
        );
    } else {
        return <div />;
    }
}


export default Characters;