import React, {useState, useEffect} from 'react';
import Category from './Category/Category';

function useFetche(url, defaultResponse){ // recibe la api y una respuesta por default en el caso de que la api no llegue
	const [data, setData] = useState(defaultResponse)

	async function getDataFromAPI(url){
		try {
			const res = await fetch(url); // me consume la api
			const data = await res.json(); // me la transforma a json

			setData({ // le agrega un estado de loading en estado false: esto sirve para que deje de mostrar el mensaje predeterminado de "...loading", le cambia el estado. Y con esto, pasaria el condicional de abajo.
				isLoading: false, 
				data
			})

		}	catch (e) { console.log(e);}
	}

	useEffect(() => {
		getDataFromAPI(url); // Esta funcion se va activar cada vez que se modifique la api. De esta manera vamos a mantener el dashboard actualizado.
	}, [url]);

	return data; // me llega la data en formato objeto

}	

const User = (props) => {

    const apiEndpoint = 'http://localhost:3001/api/users/'

	const userFetchResponse = useFetche(apiEndpoint, {isLoading: true, data: null}); // Se le asigna un estado inicial null a la data, porque todavia no tiene nada. Y un estado inicial de true en loading, todavia esta cargando la info

	if(!userFetchResponse.data || userFetchResponse.isLoading){ // Si no tengo data o el estado del loading es true, mostrar ese mensaje.
		return 'Loading...';
	}

	const apiUser = userFetchResponse.data.body; // guardo en esta variable la entrada principal a mi api de user. A la info que necesito consumir.

	console.log({apiUser});	
	
	
    return (

		<div className="card shadow mb-4">

			<div className="card-header py-3">

				<h6 className="m-0 font-weight-bold text-primary">{props.title}</h6>

			</div>

			<div className="card-body">

				<div className="row">

					<div className="col-lg-6 mb-4">

						{
							apiUser.map((users) => ( 
								
								<Category usuario = {users.email}/>
						
							))
						}						

					</div>

				</div>

            </div>
			
		</div>
						    
    )
}

export default User;