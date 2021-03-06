const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { Home } from './pages/Home.jsx'
import { EmailApp } from './apps/email/pages/EmailApp.jsx'
import { NotesApp } from './apps/notes/pages/NotesApp.jsx'
import { BookApp } from './apps/books/pages/BookApp.jsx'


export function App() {
    return (
        <Router>
            <AppHeader />
            <main className="page-container">
                <Switch className="navbar">
                    <Route component={AboutUs} path="/about" />
                    <Route component={EmailApp} path="/email" />
                    <Route component={NotesApp} path="/notes" />
                    <Route component={BookApp} path="/books" />
                    <Route component={Home} path="/" />
                </Switch>
            </main>
            <AppFooter />
        </Router>
    )
}


