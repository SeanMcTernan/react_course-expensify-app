//Dependencies
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'

//Components
import  AddExpensePage from '../components/AddExpensePage'
import  EditExpensePage  from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import { Header } from '../components/header'
import { HelpPage } from '../components/helpPage'
import { NotFoundPage } from '../components/notFoundPage'


const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
    <Route path="/" component={ExpenseDashboardPage} exact ={true} />
    <Route path="/create" component={AddExpensePage}/>
    <Route path="/help" component={HelpPage}/>
    <Route path="/edit/:id" component={EditExpensePage}/> 
    <Route component={NotFoundPage}/>
    </Switch>
    </div>
    </BrowserRouter>
)


export default AppRouter






