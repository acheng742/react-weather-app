import React from 'react';

import Titles from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY = "b936b092ba0f810a79f2d720727e3707";

class App extends React.Component {
	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined
	}
	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value
		const state = e.target.elements.state.value
		const country = e.target.elements.country.value
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}A&appid=${API_KEY}&units=imperial`);
		const data = await api_call.json();
		if (city && state && country) {
			this.setState({
				temperature: data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				description: data.weather[0].description,
				error: ''
			})
		} else {
			this.setState({
				temperature: undefined,
				city: undefined,
				country: undefined,
				humidity: undefined,
				description: undefined,
				error: 'Please enter the values.'
			})
		}
	}
	render() {
		return (
			<div>
				<div className="wrapper">
					<div className="main">
						<div className="container px-0">
							<div className="row">
								<div className="col-12 col-md-5 title-container">
									<Titles />
								</div>
								<div className="col-12 col-md-7 form-container px-5">
									<Form getWeather={this.getWeather} />
									<Weather
										temperature={this.state.temperature}
										city={this.state.city}
										country={this.state.country}
										humidity={this.state.humidity}
										description={this.state.description}
										error={this.state.error}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default App;
