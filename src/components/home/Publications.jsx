import publicationData from '../../utils/publicationData.json';

const Publications = () => {

    return (
        <div style={{paddingTop: '2rem' }} id='publications'>
                <h2>Publications</h2>
            {publicationData.map((publication, index) => (
                <div key={index} style={{display: "flex", flexDirection: "space-between", paddingBottom: "1rem"}}>
                    <h3 style={{flexBasis: "50%"}}>{publication.title}</h3>
                    <a style={{flexBasis: "50%", textAlign: "right", color: "white"}}  href={publication.link} target="_blank" rel="noreferrer">Read more</a>
                </div>
            ))}
        </div>
    )
}

export default Publications;