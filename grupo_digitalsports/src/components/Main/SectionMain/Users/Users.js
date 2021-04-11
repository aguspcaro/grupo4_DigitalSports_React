import React, {useState, useEffect} from 'react'; 
import Category from './Category/Category';

function useFetche(url, defaultResponse){ // recibe la api y una respuesta por default que nosotros mismo, mas abajo, le indicamos.

	const [data, setData] = useState(defaultResponse) // le agregamos como estado a data y a serData, el estado que le indicamos cuando hacemos uso de la funcion en la linea 33

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

	useEffect(() => { // // nos va a ayudar a emular el comportamiento de los ciclos de vida de un estado
		getDataFromAPI(url); 
	}, [url]); // es opcional, sus valores son variables, de las que depende nuestro efecto. Si el array esta vacio, no se va a actualizar(componentDidAmount). Si en vez de eso, le pasamos una api.. cada vez que se actualice la api, se ejectura esta funcion.(componentDidUpdate)

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
							apiUser.map((users, i) => ( 
								
								<Category key={users + i} usuario = {users.email}/>
						
							))
						}						

					</div>

				</div>

            </div>
			
		</div>
						    
    )
}

export default User;