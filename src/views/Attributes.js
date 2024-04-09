import React from 'react'
import { useGetAttributes } from '../hooks/index.js'

export const Attributes = () => {
    // we get the data using a custom hook
    // we will update this implementation after learning about app-runtime
    const { loading, error, data } = useGetAttributes()

    return (
        <div>
            <h1>Attributes</h1>
            <p>loading: {JSON.stringify(loading)}</p>
            <p>error message: {error?.message}</p>
            {
                // if there is any data available
                data?.attributes?.attributes && (
                    <pre>
                        {JSON.stringify(data.attributes.attributes, null, 4)}
                    </pre>
                )
            }
        </div>
    )
}
