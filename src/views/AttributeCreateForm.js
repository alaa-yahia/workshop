import { useDataMutation } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import {
    Button,
    InputFieldFF,
    hasValue,
    ReactFinalForm,
    SingleSelectFieldFF,
    AlertBar,
} from '@dhis2/ui'
import React, { useState, useEffect } from 'react'
import styles from './Form.module.css'

const { Field, Form: RFForm } = ReactFinalForm

const queryB = {
    resource: 'attributes',
    type: 'create',
    data: ({ name, valueType }) => ({
        name,
        valueType,
    }),
}
const AttributeCreateForm = () => {
    const [alert, setAlert] = useState({
        show: false,
        success: false,
        message: '',
    })
    const [mutate, { error }] = useDataMutation(queryB)

    const onSubmit = async (values) => {
        // @todo: add the mutation
        await mutate({ ...values })
        setAlert({
            show: true,
            success: true,
            critical: false,
            message: i18n.t('Attribute added successfully!'),
        })
    }

    useEffect(() => {
        if (error) {
            setAlert({
                show: true,
                success: false,
                critical: true,
                message: i18n.t('Error: {{message}}', {
                    message: error.message,
                }),
            })
        }
    }, [error])

    return (
        <div>
            <h1>{i18n.t('Add an attribute')}</h1>

            <RFForm onSubmit={onSubmit}>
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <Field
                                required
                                name="name"
                                label={i18n.t('Attribute name')}
                                component={InputFieldFF}
                                validate={hasValue}
                            />
                        </div>
                        <div className={styles.row}>
                            <Field
                                name="valueType"
                                label={i18n.t('Value Type')}
                                component={SingleSelectFieldFF}
                                className={styles.title}
                                initialValue="TEXT"
                                options={[
                                    {
                                        label: i18n.t('Text'),
                                        value: 'TEXT',
                                    },
                                    {
                                        label: i18n.t('Number'),
                                        value: 'NUMBER',
                                    },
                                ]}
                            />
                        </div>

                        <div className={styles.row}>
                            <Button type="submit" primary>
                                {i18n.t('Save')}
                            </Button>
                        </div>
                    </form>
                )}
            </RFForm>

            {alert.show && (
                <AlertBar
                    success={alert.success}
                    critical={alert.critical}
                    onHidden={() => setAlert({ ...alert, show: false })}
                >
                    {alert.message}
                </AlertBar>
            )}
        </div>
    )
}

export default AttributeCreateForm
