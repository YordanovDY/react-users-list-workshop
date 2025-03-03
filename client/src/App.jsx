import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import UserList from './components/UserList';

function App() {

    return (
        <>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <UserList />
                </section>
            </main>

            <Footer />
        </>
    )
}

export default App
