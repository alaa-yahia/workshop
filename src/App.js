import React from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import styles from './App.module.css'
import { Navigation } from './navigation/index.js'
import { Form, Home, Attributes } from './views/index.js'

const MyApp = () => (
    <HashRouter
    // HashRouter is used as there is not integration with DHIS2 server
    >
        <div className={styles.container}>
            <div className={styles.left}>
                <Navigation
                // This component has to be inside the `BrowserRouter`
                // because it will use the router's information
                // (It will access the react context through hooks)
                />
            </div>

            <div className={styles.right}>
                <Routes>
                    <Route
                        // Home route, will render "Home" component
                        // when "/" is the current url
                        exact
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        // Form route, will render "Form" component
                        // when "/form" is the current url
                        exact
                        path="/form"
                        element={<Form />}
                    />

                    <Route
                        // Attributes route, will render "Attributes" component
                        // when "/attributes" is the current url
                        exact
                        path="/attributes"
                        element={<Attributes />}
                    />
                    <Route
                        // functions as default route, redirects to home
                        // when invalid path is provided
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </div>
        </div>
    </HashRouter>
)

export default MyApp
