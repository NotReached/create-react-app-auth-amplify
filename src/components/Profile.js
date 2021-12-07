import React, {Component} from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { UserInformation } from '../models';
import "survey-react/survey.css";
import * as Survey from "survey-react";
import { render, ReactDOM } from 'react-dom';

class Profile extends Component {
	constructor(props){
		super(props)
		this.state = {

		}
		this.onCompleteComponent = this.onCompleteComponent.bind(this)
	}
	onCompleteComponent = () =>{
		this.setState({
			isCompleted: true
		})
	}

render(){
	Survey
    	.StylesManager
    	.applyTheme("modern");

	var json = {
		questions: [
			{
				name: "name",
				type: "text",
				title: "Please enter your name or alias:",
				placeHolder: "Jane Doe / Scarlet Blackout",
				isRequired: true,
				autoComplete: "name"
			}, {
				name: "email",
				type: "text",
				inputType: "email",
				title: "Please enter your email",
				placeHolder: "scarlet@example.com",
				isRequired: true,
				autoComplete: "email"
			}, {
				name: "books",
				type: "text",
				inputType: "text",
				title: "What books, authors, or genres are you interested in?",
				placeHolder: "Harry Potter, Steven King, YA novels, etc",
				isRequired: true,
				autoComplete: "text"
			}, {
				name: "candy",
				type: "text",
				inputType: "text",
				title: "What sort of candy do you like?",
				placeHolder: "chocolate, swedish fish, reeses",
				isRequired: true,
				autoComplete: "text"
			}, {
				name: "allergies",
				type: "text",
				inputType: "address",
				title: "Do you have any allergies or food aversions?",
				placeHolder: "Tree nuts, coconut, peanuts, etc",
				isRequired: true,
				autoComplete: "text"
			}, 
		]
	};
	window.survey = new Survey.Model(json);

	survey
    	.onComplete
    	.add(function (sender) {
        	document
            	.querySelector('#surveyResult')
            	.textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
    	});

	// ReactDOM.render(<Survey.Survey model={survey}/>, document.getElementById("surveyElement"));

		var surveyRender = !this.state.isCompleted ? (
			<Survey.Survey 
			json={json}
			showCompletedPage={false}
			onComplete={this.onCompleteComponent}
			/>
		) : null

		var onSurveyCompletion = this.state.isCompleted ? (
			<div>Completed Successfully</div>
		) : null;
	return (
		<div className="Profile">
			<div>
				{surveyRender}
				{onSurveyCompletion}
			</div>
		</div>
	);
}
}
export default Profile;

// await DataStore.save(
//     new UserInformation({
// 		"address": "Lorem ipsum dolor sit amet",
// 		"books": "Lorem ipsum dolor sit amet",
// 		"allergies": "Lorem ipsum dolor sit amet",
// 		"snacks": "Lorem ipsum dolor sit amet"
// 	})
// );

// /* Models in DataStore are immutable. To update a record you must use the copyOf function
//  to apply updates to the item’s fields rather than mutating the instance directly */
//  await DataStore.save(UserInformation.copyOf(CURRENT_ITEM, item => {
//     // Update the values on {item} variable to update DataStore entry
// }));