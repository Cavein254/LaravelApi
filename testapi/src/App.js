import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Card from "./components/main/Card";
import Hero from "./components/main/Hero";
import QuestionList from "./components/questionlist/QuestionList";
import Login from "./components/auth/Login";

import Test from "./components/test/Test";
import Queries from "./components/test/Queries";

function App() {
    return (
        <div>
            <Header />
            {/* <Login /> */}
            <QuestionList />
            {/* <Hero /> */}
            {/* <Main /> */}
            {/* <Card /> */}
            <Footer />
        </div>
    );
}

export default App;
