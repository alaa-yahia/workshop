import { Tag } from '@dhis2/ui'
import React from 'react'
import { useConfig } from '@dhis2/app-runtime'

export const Home = () => {
    const { apiVersion, baseURL } = useConfig()
    return (
        <div>
            <h1>Home</h1>

            <p>DHIS2 Web App Academy 2024</p>

            <Tag positive>Api Version: {apiVersion}</Tag>
            {baseURL}
        </div>
    )
}
