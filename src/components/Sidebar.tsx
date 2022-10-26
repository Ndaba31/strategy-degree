import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
    const tabs = [
        {
            tab: 'Dashboard',
            link: 'dashboard'
        },
        {
            tab: 'Company',
            link: 'company'
        },
        {
            tab: 'Strategy Development',
            sub_tabs: [
                {
                    sub: 'SWOT Analysis',
                    link: 'swot-analysis'
                },
                {
                    sub: 'Vision and Mission',
                    link: 'statements'
                },
                {
                    sub: 'Core Values',
                    link: 'core-values'
                },
                {
                    sub: 'Key Focus Areas',
                    link: 'key-focus-areas'
                },
                {
                    sub: 'Stakeholder Analysis',
                    link: 'stakeholder-analysis'
                },
                {
                    sub: 'Risk Management',
                    link: 'risk-management'
                },
            ]
        },
        {
            tab: 'Profile',
            link: 'profile'
        }
    ]

    return (
        <div>Sidebar</div>
    )
}

export default Sidebar