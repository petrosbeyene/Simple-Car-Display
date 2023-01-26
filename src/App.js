import React, {useState, useEffect} from "react";
import "./styles.css";
import Car from './components/Car'
import axios from "axios";



const App = () => {
    const [cars, setCars] = useState([])
	const [error, setError] = useState('')

	async function getUser() {
		try {
			const response = await axios.get('https://mocki.io/v1/4f7bf80f-e4c8-44c5-9be2-afc649a5af96');
			setCars(response.data.cars);
		} catch (error) {
			// for this purpose i think it's enough to have the error hadled and printed out
			// to the console
			setError(error)
		}
	}

	useEffect(()=>{
		getUser()
	}, [])

    return (
      <>
	  	{error ? <h1>Error Occurred While Fetching</h1>:
		<div>
			<h1 style={{ textAlign: "center" }}>Cars Display</h1>
			<div style={{padding: '10px'}}>
				{
					cars.map(car => <Car key={car.id} 
						name={car.carName} 
						detail={car.detail}
						features={car.features}
						images = {car.images}
						includedInPrice={car.includedInThePrice}
						price={car.carPrice}/>
					)
				}
			</div>
		</div>}
      </>
  );
}

export default App


