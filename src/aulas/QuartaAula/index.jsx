import './style.scss'
import youtubeImage from './../../assets/images/youtube-home.png'

export function QuartaAula() {

    const componentsFinded = [
        { 
            id: 1,
            title: 'Vídeo Component',
            image: youtubeImage,
            text: 'Lorem ipsum'
        },
        { 
            title: 'Input Component',
            image: youtubeImage,
            text: 'Lorem ipsum'
        }
    ]
   
    return(
        <div className='quarta-aula-component'>
            
            <h1 className='main-title'>Componentes identificados</h1>

            <ul className='components-finded'>

                {

                    componentsFinded.map(
                        component => {
                            return(
                                <li key={component.id}>
                                <img src={component.image} />
                                <h1>Vídeo</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium eligendi cumque! Quasi perspiciatis illo minima inventore aspernatur impedit in libero necessitatibus, fuga architecto reprehenderit cum, non recusandae incidunt nobis?</p>
                                </li>  
                            ) 
                        }
                    )

                }
                                         
            </ul>
        
        </div>
        
    )

}