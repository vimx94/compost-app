import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { HomeLayout } from '../template/HomeLayout'
export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <React.Fragment>
            <HomeLayout>
                <Outlet/>
            </HomeLayout>
        </React.Fragment>
    )
}
