'use client'

import style from "./Preloader.module.scss"
import {useEffect, useState} from "react";
import {clsx} from "clsx";

export const Preloader = () => {
const [hide, setHide] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setHide(true), 8000)

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={clsx({
            [style.preloader]: true,
            [style.preloader_hide]: hide,
        })}>

            <video src="/mp4/beachy.mp4"
                   playsInline={true}
                   loop={true}
                   muted={true}
                   autoPlay={true}
                   className={style.logo}
            />

        </div>
    )
}