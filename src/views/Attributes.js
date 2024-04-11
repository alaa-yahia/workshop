import { useDataQuery, useDataMutation } from '@dhis2/app-runtime'
import {
    Table,
    TableCell,
    TableRow,
    TableBody,
    CenteredContent,
    CircularLoader,
    Button,
} from '@dhis2/ui'
import React from 'react'
import AttributeCreateForm from './AttributeCreateForm.js'

const queryA = {
    attributes: {
        resource: 'attributes',
        params: {
            order: 'displayName:desc',
            fields: ['id', 'unique', 'displayName'],
            pageSize: 5,
        },
    },
    me: {
        resource: 'me',
        params: {
            fields: ['displayName', 'email'],
        },
    },
}

const queryC = {
    resource: 'attributes',
    type: 'delete',
    id: ({ id }) => id,
}

export const Attributes = () => {
    // we get the data using a custom hook
    // we will update this implementation after learning about app-runtime
    //const { loading, error, data } = useGetAttributes()
    const { loading, error, data, refetch } = useDataQuery(queryA)
    const [mutate] = useDataMutation(queryC)

    if (loading) {
        return (
            <CenteredContent>
                <CircularLoader />
            </CenteredContent>
        )
    }

    const onClick = async (id) => {
        await mutate({ id })
        refetch()
    }

    return (
        <div>
            <h1>Attributes</h1>
            <p>loading: {JSON.stringify(loading)}</p>
            <p>error message: {error?.message}</p>
            <p>
                {data.me.displayName} - {data.me.email}
            </p>
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
                                    <TableCell>
                                        <Button
                                            small
                                            destructive
                                            onClick={() => onClick(row.id)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )
            }
            <div>
                <h1>Attributes</h1>
                <AttributeCreateForm />
            </div>
        </div>
    )
}
