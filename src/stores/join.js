import { observable, action, computed } from "mobx";
import axios from "axios";

export default class JoinStore {
  @observable user_email = "";
  @observable user_password = "";
  @observable user_password_recheck = "";
  @observable user_name = "";
  @observable user_nickname = "";
  @observable user_phone = "010";

  @observable email_check = false;
  @observable nickname_check = false;
  @observable error = "";

  //회원정보수정
  @observable info = {};

  constructor(root) {
    this.root = root;
  }
  //input
  @action
  handleEmailChange = (e) => {
    this.user_email = e.target.value;
  };
  @action
  handlePassChange = (e) => {
    this.user_password = e.target.value;
  };
  @action
  handlePassCheckChange = (e) => {
    this.user_password_recheck = e.target.value;
  };
  @action
  handleNameChange = (e) => {
    this.user_name = e.target.value;
  };
  @action
  handleNicknameChange = (e) => {
    this.user_nickname = e.target.value;
  };
  @action
  handlePhoneChange = (e) => {
    this.user_phone = e.target.value;
  };

  @action
  handelReset = () => {
    this.user_email = "";
    this.user_password = "";
    this.user_password_recheck = "";
    this.user_name = "";
    this.user_nickname = "";
    this.user_phone = "010";

    this.email_check = false;
    this.nickname_check = false;
    this.error = "";
  };

  //유효성검사
  @computed
  get available_email() {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z]){3,}@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(this.user_email);
  }
  @computed
  get available_password() {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
    return regExp.test(this.user_password);
  }
  @computed
  get available_pass_recheck() {
    return this.user_password_recheck === this.user_password;
  }
  @computed
  get available_name() {
    var regExp = /^[가-힣]{2,10}$/;
    return regExp.test(this.user_name);
  }
  @computed
  get available_phone() {
    var regExp = /^[0-9]{11,12}$/;
    return regExp.test(this.user_phone);
  }

  @computed
  get available_nickname() {
    var regExp = /^[가-힣]{2,8}$/;
    return regExp.test(this.user_nickname);
  }

  //중복체크
  @computed
  get checkEmail() {
    let url = "http://localhost:3000/acorn/chef/checkid";
    let user_email = new FormData();
    user_email.append("user_email", this.user_email);
    if (this.available_email) {
      axios({
        method: "post",
        url: url,
        data: user_email,
        //headers: { "Content-Type": "multipart/form-data" },
      })
        .then((res) => {
          if (res.data === 1) {
            this.email_check = true;
          } else {
            this.email_check = false;
          }
        })
        .catch((err) => {
          console.log("업로드 오류:" + err);
        });
    }
    return this.email_check;
  }
  @computed
  get checkNickname() {
    let url = "http://localhost:3000/acorn/chef/checknick";
    let user_nickname = new FormData();
    user_nickname.append("user_nickname", this.user_nickname);
    if (this.available_nickname) {
      axios({
        method: "post",
        url: url,
        data: user_nickname,
        //headers: { "Content-Type": "multipart/form-data" },
      })
        .then((res) => {
          if (res.data === 1) {
            this.nickname_check = true;
          } else {
            this.nickname_check = false;
          }
        })
        .catch((err) => {
          console.log("업로드 오류:" + err);
        });
    }
    return this.nickname_check;
  }

  @action
  handleSubmit = () => {
    let url = "http://localhost:3000/acorn/chef/regist";
    let submit = new FormData();
    submit.append("user_name", this.user_name);
    submit.append("user_email", this.user_email);
    submit.append("user_password", this.user_password);
    submit.append("user_phone", this.user_phone);
    submit.append("user_nickname", this.user_nickname);
    //유효성 처리
    if (this.email === "") {
      this.error = "이메일을 입력하세요";
    } else if (!this.available_email) {
      this.error = "이메일 형식을 지켜주세요";
    } else if (!this.email_check) {
      this.error = "이미 가입된 이메일입니다.";
    } else if (this.user_password === "") {
      this.error = "비밀번호를 입력하세요";
    } else if (!this.available_password) {
      this.error = "비밀번호 형식을 지켜주세요";
    } else if (this.user_password_recheck === "" || !this.available_pass_recheck) {
      this.error = "비밀번호가 일치하지 않습니다";
    } else if (this.user_name === "") {
      this.error = "이름을 입력하세요";
    } else if (!this.available_name) {
      this.error = "이름 형식을 지켜주세요";
    } else if (this.user_nickname === "") {
      this.error = "닉네임을 입력하세요";
    } else if (!this.available_nickname) {
      this.error = "닉네임 형식을 지켜주세요";
    } else if (!this.nickname_check) {
      this.error = "이미 가입된 닉네임입니다.";
    } else if (this.user_phone === "") {
      this.error = "전화번호를 입력하세요";
    } else if (!this.available_phone) {
      this.error = "전화번호 형식을 지켜주세요";
    } else {
      axios({
        method: "post",
        url: url,
        data: submit,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((res) => {
          alert("가입을 축하합니다.");
          window.location.replace("/login");
        })
        .catch((err) => {
          console.log("업로드 오류:" + err);
        });
    }
  };
}
