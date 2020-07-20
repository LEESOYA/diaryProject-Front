import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../../css/join.css";

class menu extends Component {
	render() {
		return (
			<div>
				<div style={{height:"150px"}}>                    
					<div style={{
						float:"right",
						position:"relative",
						top:"15px",
						right:"15px"
						}}>                        
						{/* <Link to="/login" className="linktext">로그인</Link>&ensp;
						<Link to="/join" className="linktext">회원가입</Link> */}
						<Link to="/components/login/login" className="linktext">로그인</Link>&ensp;
						<Link to="/components/join/join" className="linktext">회원가입</Link>
					</div>
					<br/>
					<center>
						<a href="/">
							<img src="/img/logo1.jpg" alt=""
									style={{marginTop:"30px"}}/>
						</a>
					</center>
				</div>
			</div>
		);
	}
}

export default menu;