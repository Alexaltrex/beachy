'use client'

import style from "./Preloader.module.scss"
import {useState} from "react";
import {clsx} from "clsx";

export const Preloader = () => {
const [hide, setHide] = useState(false);

    const onEnded = () => {
        setHide(true)
    }

    return (
        <div className={clsx({
            [style.preloader]: true,
            [style.preloader_hide]: hide,
        })}>
            <video src="/mp4/beachy.mp4"
                   playsInline={true}
                   loop={false}
                   muted={true}
                   autoPlay={true}
                   className={style.logo}
                   onEnded={onEnded}
                   // onLoadedData={() => {
                   //     console.log("onLoaded - ", new Date())
                   // }}
            />

        </div>
    )
}