const Card = ({character}) =>{
        
            return ( 
            <figure>
                 { character.imgSrc ? (<img src={character.imgSrc} alt= {character.name} />) : (<p>???</p>)}
                 <figcaption>{character.name}</figcaption>
            </figure>     
         ); ;
        } 

export default Card