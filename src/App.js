import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header";
import PageNotFound from "./components/common/PageNotFound";
import CoursesPage from "./components/courses/CoursesPage";
import CourseManagementPage from "./components/courses/CourseManagementPage";
import AuthorsPage from "./components/authors/AuthorsPage";
import MembersPage from "./components/members/MembersPage";
import StagesPage from "./components/stages/StagesPage";
import MigrationsPage from "./components/migrations/MigrationsPage";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={CourseManagementPage} />
        <Route path="/course" component={CourseManagementPage} />
        <Route path="/authors" component={AuthorsPage} />
        <Route path="/members" component={MembersPage} />
        <Route path="/migrations" component={MigrationsPage} />
        <Route path="/stages" component={StagesPage} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
