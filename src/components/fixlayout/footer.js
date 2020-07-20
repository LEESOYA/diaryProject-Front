import React, { Component } from 'react';
import "../../css/join.css"

class footer extends Component {
	render() {
		return (
			<div>
				<div style={{
					backgroundColor:"#fafafa",
					height:"100px",
					fontFamily: "'Noto Sans KR', sans-serif",
					fontSize:"10pt",
					fontWeight:"200",
					padding:"40px 100px",
					color:"#a1a1a1", 
					marginTop:"50px",
					// position:'relative',
					// bottom:'0px',
					borderTop:"1px solid #e5e5e5"                   
				}}>
					<p 
						style={{
						fontSize:"11pt",
						fontWeight:"500",
						color:"#6e6e6e"
					}}>데일리 다이어리</p>
					<span>서울서울서울</span>
					<br/>
					<span>이소야, 이예지, 박소희</span>
				</div>
			</div>
		);
	}
}

export default footer;