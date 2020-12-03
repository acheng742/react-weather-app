import React from 'react';

const Form = props => (
	<form onSubmit={props.getWeather} className="row">
		<div className="col-12 col-lg-4">
			<input type="text" name="city" placeholder="City" />
		</div>
		<div className="col-12 col-lg-4">
			<input type="text" name="state" placeholder="State" />
		</div>
		<div className="col-12 col-lg-4">
			<input type="text" name="country" placeholder="Country" />
		</div>
		<div className="col-12">
			<button>Get Weather</button>
		</div>
	</form>
);

export default Form;
