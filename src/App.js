import React from 'react';
export default class App extends React.Component {
sayHi = () => {
	alert("Hi jigyasa here ");
}
sayHello = () => {
	alert("Hello jigyasa here ");
} 
greet=() =>{
  alert("goodmorning");
}
render() {
	return (
	<div style={{ marginLeft: 50 }}>
		<Child1 m1={this.sayHi}
				m2={this.sayHello}
        m3={this.greet } >
		</Child1>
		<br></br>
		<Child2 m1={this.sayHi}
				m2={this.sayHello}>
		</Child2>
	</div>
	)
}
}
class Child1 extends React.Component {
seperatemethod = () => {
	this.props.m1();
	this.props.m2();
  this.props.m3();
}
render() {
	return (
	<div>
		<button onClick={this.seperatemethod}>
		click me
		</button>
	</div>
	)
}
}
class Child2 extends React.Component {
render() {
	return (
	<div>
		<button onClick={() => {
		this.props.m1();
		this.props.m2();
		}}
		>Click me </button>
	</div>
	)
}
}
