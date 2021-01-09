import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Card from "./components/main/Card";
import Hero from "./components/main/Hero";
import QuestionList from "./components/questionlist/QuestionList";

function App() {
    return (
        <div>
            <Header />
            <QuestionList />
            {/* <Hero /> */}
            {/* <Main /> */}
            {/* <Card /> */}
            <Footer />
        </div>
    );
}

export default App;
