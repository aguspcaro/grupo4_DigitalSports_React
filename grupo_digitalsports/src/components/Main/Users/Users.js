import React, {useState, useEffect} from 'react';
import Category from './Category/Category';

function useFetche(url, defaultResponse){
	const [data, setData] = useState(defaultResponse)

	async function getDataFromAPI(url){
		try {
			const res = await fetch(url);
			const data = await res.json();

			setData({
				isLoading: false,
				data
			})

		}	catch (e) { console.log(e);}
	}

	useEffect(() => {
		getDataFromAPI(url);
	}, [url]);

	return data;

}	

const User = (props) => {

    const apiEndpoint = 'http://localhost:3001/api/users/'

	const userFetchResponse = useFetche(apiEndpoint, {isLoading: true, data: null});

	if(!userFetchResponse.data || userFetchResponse.isLoading){
		return 'Loading...';
	}
	console.log(userFetchResponse);
	const apiUser = userFetchResponse.data.body;

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