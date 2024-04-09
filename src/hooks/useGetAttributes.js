import { useEffect, useState } from 'react'

const ATTRIBUTES = {
    attributes: {
        attributes: [
            {
                unique: false,
                displayName: 'Alternative name',
                id: 'DnrLSdo4hMl',
            },
            {
                unique: false,
                displayName: 'Catchment area',
                id: 'ihn1wb9eho8',
            },
            {
                unique: false,
                displayName: 'Classification',
                id: 'Z4X3J7jMLYV',
            },
            {
                unique: false,
                displayName: 'Collection method',
                id: 'qXS2NDUEAOS',
            },
            {
                unique: true,
                displayName: 'HR identifier',
                id: 'UKNKz1H10EE',
            },
            {
                unique: true,
                displayName: 'KE code',
                id: 'l1VmqIHKk6t',
            },
            {
                unique: false,
                displayName: 'NGO ID',
                id: 'n2xYlNbsfko',
            },
            {
                unique: false,
                displayName: 'PEPFAR ID',
                id: 'dLHLR5O4YFI',
            },
            {
                unique: false,
                displayName: 'Rationale',
                id: 'AhsCAtM3L0g',
            },
            {
                unique: true,
                displayName: 'TZ code',
                id: 'xqWyz9jNCA5',
            },
            {
                unique: false,
                displayName: 'Unit of measure',
                id: 'Y1LUDU8sWBR',
            },
        ],
    },
}

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export const useGetAttributes = () => {
    const [loading, setLoading] = useState(true)
    const error = null
    const data = ATTRIBUTES

    useEffect(() => {
        const delayLoading = async () => {
            await sleep(1000)
            setLoading(false)
        }
        delayLoading()
    }, [])

    return { loading, error, data }
}
