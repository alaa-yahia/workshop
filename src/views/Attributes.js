import {
    Table,
    TableCell,
    TableRow,
    TableBody,
    CenteredContent,
    CircularLoader,
} from '@dhis2/ui'
import React from 'react'
import { useGetAttributes } from '../hooks/index.js'

export const Attributes = () => {
    // we get the data using a custom hook
    // we will update this implementation after learning about app-runtime
    const { loading, error, data } = useGetAttributes()
    if (loading) {
        return (
            <CenteredContent>
                <CircularLoader />
            </CenteredContent>
        )
    }
    return (
        <div>
            <h1>Attributes</h1>
            <p>loading: {JSON.stringify(loading)}</p>
            <p>error message: {error?.message}</p>
            {
                // if there is any data available
                data?.attributes?.attributes && (
                    <Table>
                        <TableBody>
                            {data.attributes.attributes.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.displayName}</TableCell>
                                    <TableCell>
                                        {row.unique ? 'Y' : 'N'}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )
            }
        </div>
    )
}
