import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { TextField, Button, Grid } from '@material-ui/core';
import { AccountCircle, Https, Email } from "@material-ui/icons";
import "../../../css/join.css"

@inject((stores) => ({
	user_email: stores.login.user_email,
	user_password: stores.login.user_password,
	handleReset: stores.login.handleReset,
	handleLogin: stores.login.handleLogin,
	handleEmailChange: stores.login.handleEmailChange,
	handlePassChange: stores.login.handlePassChange,
	// login_state: stores.info.login_state,
	
	//유효성 검사
	available_email: stores.login.available_email,
	available_password: stores.login.available_password,

	// modal_open: stores.findPass.modal_open,
	// handleOpen: stores.findPass.handleOpen,
	error: stores.login.error,

	handleEnter: stores.login.handleEnter,
}))

@observer
class login extends Component {
	componentWillMount = () => {
		this.props.handleReset();
	
		if (this.props.login_state) {
			this.props.history.push("/"); 
		}
	};

	render() {
		const {
			user_email,
			user_password,
			handleEmailChange,
			handlePassChange,
			available_email,
			modal_open,
			handleOpen,
			handleLogin,
			history,
			error,      
			handleEnter,
		} = this.props;

		return (
			<div>
				<Grid container spacing={1} alignItems="flex-start"
					style={{ marginLeft: "5px" }}>
					<Grid item style={{ padding: "10px 1px" }}>
						<Email />
					</Grid>
					<Grid item>
						<TextField
							error={!(user_email === "") ^ available_email}
							helperText={
									available_email || user_email === ""
									? ""
									: "이메일 형식으로 입력하세요"
							}
							value={user_email}
							id="outlined-id-input"
							variant="outlined"
							size="small"
							label="E-mail"
							type="text"
							onChange={handleEmailChange}
						/>
					</Grid>
				</Grid>
				<br/><br/>
				<Grid container spacing={1} style={{ marginTop: "3px", marginLeft: "5px" }}>
					<Grid item style={{ padding: "10px 1px" }}>
						<Https />
					</Grid>
					<Grid item>
						<TextField
							id="outlined-password-input"
							name="password"
							variant="outlined"
							size="small"
							label="Password"
							type="password"
							autoComplete="current-password"
							value={user_password}
							onChange={handlePassChange}
							onKeyPress={(e) => {
									handleEnter(e, history);
							}}
						/>
					</Grid>
				</Grid>
				<br/>
				<div 
					class="clickDiv" 
					style={{marginTop:"50px",width:"100px"}}
					onClick={() => {
							handleLogin(history);
					}}
				>
					<Button                    
						style={{
							padding:"0",
							fontSize:"13pt",
							marginLeft:"16px",
						}}
						size="large"
					>
					로그인
					</Button>
					<br/>
					<img src="/img/underline_red.png" alt="" width="100px"/> 
					</div>
			</div>
		);
	}
}

export default login;