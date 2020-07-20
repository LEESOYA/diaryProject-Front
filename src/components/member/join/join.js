import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { TextField, Button } from '@material-ui/core';
import "../../../css/join.css"

@inject(stores => ({
    user_email: stores.join.user_email,
    user_name: stores.join.user_name,
    user_password: stores.join.user_password,
    user_password_recheck: stores.join.user_password_recheck,
    user_nickname: stores.join.user_nickname,
    user_phone: stores.join.user_phone,
    error: stores.join.error,    
    handleSubmit: stores.join.handleSubmit,

    handleEmailChange: stores.join.handleEmailChange,
    handlePassChange: stores.join.handlePassChange,
    handlePassCheckChange: stores.join.handlePassCheckChange,
    handleNameChange: stores.join.handleNameChange,
    handleNicknameChange: stores.join.handleNicknameChange,
    handlePhoneChange: stores.join.handlePhoneChange,

    //유효성 검사
    available_email: stores.join.available_email,
    available_password: stores.join.available_password,
    available_pass_recheck: stores.join.available_pass_recheck,
    available_name: stores.join.available_name,
    available_nickname: stores.join.available_nickname,
    available_phone: stores.join.available_phone,

    //중복체크
    checkEmail: stores.join.checkEmail,
    checkNickname: stores.join.checkNickname,   
}))

@observer
class join extends Component {
    render() {
        const {
            user_email,
            user_password,
            user_password_recheck,
            user_name,
            user_nickname,
            user_phone,
            error,

            //유효성
            available_email,
            available_password,
            available_pass_recheck,
            available_name,
            available_nickname,
            available_phone,
            //중복체크
            checkEmail,
            checkNickname,
            //change
            handleEmailChange,
            handlePassChange,
            handlePassCheckChange,
            handleNameChange,
            handleNicknameChange,
            handlePhoneChange,
            //submit
            handleSubmit,
          } = this.props;

        return (
            <div>
                <p>이메일</p>
                <TextField
                    id="standard-basic"
                    value={user_email}
                    name="user_email"
                    onChange={handleEmailChange}
                    error={
                        user_email === ""
                          ? false
                          : (available_email === false) === true
                            ? true
                            : available_email === true && checkEmail === false
                              ? true
                              : false
                      }
                      helperText={
                        user_email === ""
                          ? ""
                          : !available_email
                            ? "이메일 형식이 유효하지 않습니다"
                            : available_email === true && checkEmail === false
                              ? "이미 가입된 이메일입니다"
                              : "사용 가능"
                      }
                    />
                <br/><br/>
                <p>이름</p>
                <TextField
                    id="standard-basic"
                    value={user_name}
                    onChange={handleNameChange}
                    error={!(user_name === "") ^ available_name}
                    helperText={
                    available_name || user_name === ""
                        ? ""
                        : "한글 2~10자"
                    }
                />
                <br/><br/>
                <p>비밀번호</p>
                <TextField
                    id="standard-password-input"
                    name="password"
                    value={user_password}
                    onChange={handlePassChange}
                    type="password"
                    autoComplete="current-password"
                    error={!(user_password === "") ^ available_password}
                    helperText={
                    available_password || user_password === ""
                        ? ""
                        : "8~10자 영문,숫자 조합"
                    }
                />
                <br/><br/>
                <p>비밀번호 확인</p>
                <TextField
                    onChange={handlePassCheckChange}
                    id="standard-password-input"
                    type="password"
                    name="user_password_recheck"
                    value={user_password_recheck}
                    autoComplete="current-password"
                    error={
                        user_password_recheck === "" ? false 
                        : !available_pass_recheck ? true : false
                    }
                    helperText={
                      available_pass_recheck || user_password_recheck === ""
                        ? ""
                        : "비밀번호가 일치하지 않습니다"
                    }
                />
                <br/><br/>
                <p>닉네임</p>
                <TextField
                    id="standard-basic"
                    value={user_nickname}
                    onChange={handleNicknameChange}
                    error={
                        user_nickname === ""
                        ? false
                        : (available_nickname === false) === true
                        ? true
                        : available_nickname === true && checkNickname === false
                            ? true
                            : false
                    }
                    helperText={
                        user_nickname === ""
                        ? ""
                        : !available_nickname
                        ? "한글 2~8자"
                        : available_nickname === true && checkNickname === false
                            ? "이미 사용중인 닉네임입니다"
                            : "사용 가능"
                    }
                />
                <br/><br/>
                <p>전화번호</p>
                <TextField 
                    id="standard-basic"
                    value={user_phone}
                    onChange={handlePhoneChange}
                    error={!(user_phone === "010") ^ available_phone}
                    helperText={!available_phone && "하이픈(-) 없이 입력"}  
                />                
                <br/>
                <div 
                    class="clickDiv" 
                    style={{marginTop:"50px",width:"100px"}}
                    onClick={handleSubmit}
                >
                    <Button
                        style={{
                            padding:"0",
                            fontSize:"13pt",
                            marginLeft:"16px",
                        }}
                        size="large"
                    >가입</Button>
                    <br/>
                    <img src="/img/underline_red.png" alt=""
                        width="100px"
                    />
                </div>             
            </div>
        );
    }
}

export default join;