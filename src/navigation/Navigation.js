import { MenuItem, Menu } from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'
// @TODO: Import the `Menu` and `MenuItem` components
import { useNavigate, useMatch } from 'react-router-dom'

const NavigationItem = ({ path, label }) => {
    // function to navigate to different route
    const navigate = useNavigate()

    // "null" when not active, "object" when active
    const routeMatch = useMatch(path)
    // path is matched if routeMatch is not null
    // eslint-disable-next-line no-unused-vars
    const isActive = Boolean(routeMatch)

    // eslint-disable-next-line no-unused-vars
    const onClick = () => navigate(path)

    // @TODO: Use the `MenuItem` component instead of the `div`
    return <MenuItem label={label} onClick={onClick} />
}

NavigationItem.propTypes = {
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

export const Navigation = () => (
    // @TODO: Use the `Menu` components instead of the `div`
    <Menu>
        <NavigationItem
            // Menu item for the home page
            label="Home"
            path="/"
        />

        <NavigationItem
            // Menu item for the meta data page
            label="Attributes"
            path="/attributes"
        />

        <NavigationItem
            // Menu item for the Form page
            label="Form"
            path="/form"
        />
    </Menu>
)
