'use client'

import { NextUIProvider } from '@nextui-org/react';
import React from 'react'

type Props = {
    children: React.ReactNode;
}

const Providers = (props: Props) => {
    return (
        <NextUIProvider>{props.children}</NextUIProvider>
    )
}

export default Providers