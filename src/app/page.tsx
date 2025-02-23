import {Metadata} from "next";
import style from "./HomePage.module.scss"
import Image from 'next/image'
import {svgIcons} from "../assets/svgIcons";


export const metadata: Metadata = {
    title: "Beachy - Home",
};

const HomePage = () => {
    return (
        <div
            className={style.homePage}
        >
            <div className={style.top}>

                <div className={style.img_mobile}>
                    <Image src="/png/home/top_mobile.png"
                           width={259}
                           height={340}
                           priority={true}
                           alt=""
                    />
                </div>

                <div className={style.img_desktop}>
                    <Image src="/png/home/top_desktop.png"
                           width={713}
                           height={884}
                           priority={true}
                           alt=""
                    />
                </div>

            </div>

            <div className={style.bottom}>

                <div className={style.background}>
                    <video src="/mp4/water.mp4"
                           playsInline={true}
                           loop={false}
                           muted={true}
                           autoPlay={true}

                    />
                </div>


                {svgIcons.logo_full}

                <p className={style.description}>

                    We are Beachy a APP specialist
                    on Booking Beach activities ⛱️
                </p>

                <div className={style.divider}/>

                <p className={style.about}>
                    Villas, Apartments, Resorts & Yachts.
                </p>

                <div className={style.buttons}>
                    {
                        [
                            {
                                icon: svgIcons.appStore,
                                href: "#",
                            },
                            {
                                icon: svgIcons.googlePlay,
                                href: "#",
                            },
                        ].map(({icon, href}, key) => (
                            <a key={key}
                               href={href}
                               target="_blank"
                               rel="noopener noreferrer nofollow"
                            >
                                {icon}
                            </a>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default HomePage
