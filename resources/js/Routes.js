import {
  HomePage,
  QuestionListPage,
  ProfilePage,
  UsersListPage,
  EditingPage,
  LoginPage,
  RegisterPage,
  BlogEditPage,
  EditProfilePage,
  QuestionAnswersPage,
  AllblogsPage
} from "./pages";
import AllBlogs from './components/Blog/Allblogs';
import { Route } from "react-router-dom";
function Routes() {
  return (
    <div className="Routes">
      <Route path="/" exact component={HomePage} />
      <Route path="/queries" exact component={QuestionListPage} />
      <Route path="/user" exact component={ProfilePage} />
      <Route path="/users" exact component={UsersListPage} />
      <Route path="/query" exact component={EditingPage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/register" exact component={RegisterPage} />
      <Route path="/editblog" exact component={BlogEditPage} />
      <Route path="/profile" exact component={ProfilePage} />
      <Route path="/editprofile" exact component={EditProfilePage} />
      <Route path="/query/1" exact component={QuestionAnswersPage} />
      <Route path='/bloglist' exact component={AllblogsPage} />
    </div>
  );
}

export default Routes;
