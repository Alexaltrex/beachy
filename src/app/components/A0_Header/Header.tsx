'use client'

import style from "./Header.module.scss"
import Link from "next/link";
import {svgIcons} from "../../../assets/svgIcons";
import {usePathname} from "next/navigation";
import {clsx} from "clsx";
import {useRef, useState} from "react";

export const Header = () => {
    const pathname = usePathname();

    const ref = useRef<HTMLAudioElement>(null!)

    const [play, setPlay] = useState(false)

    const onPlay = () => {
        if (play) {
            ref.current.pause();
        } else {
            ref.current.play().then(() => {});
        }

        setPlay(!play)
    }

    return (
        <header className={style.header}>
            <Link href="/"
                  className={style.logo}
            >
                <div className={style.icon}>{svgIcons.logo}</div>
            </Link>

            <audio src="/mp3/ocean-waves.mp3"
                   ref={ref}
                   autoPlay={false}
            />

            <button className={clsx({
                [style.musicBtn]: true,
                [style.musicBtn_home]: pathname === "/",
            })}
                    onClick={onPlay}
            >
                {play ? svgIcons.music : svgIcons.music_off}
            </button>
        </header>
    )
}