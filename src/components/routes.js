import React from "react";
import { Switch, Route } from "react-router-dom";

//컴포넌트
import Main from "./main";
import Login from "./member/login/login";
import Join from "./member/join/join";

export default () => (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/join" component={Join} />
    </Switch>
);
