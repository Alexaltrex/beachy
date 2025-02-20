'use client'

import style from "./Footer.module.scss"
import {usePathname} from "next/navigation";
import {svgIcons} from "../../../assets/svgIcons";
import {clsx} from "clsx";
import Link from "next/link";

export const Footer = () => {
    const pathname = usePathname();
    console.log(pathname)

    return (
        <footer className={style.footer}>

            <nav className={style.socialLinks}>
                {
                    [
                        {
                           icon: svgIcons.socialLink_0,
                           href: "#",
                        },
                        {
                            icon: svgIcons.socialLink_1,
                            href: "#",
                        },
                        {
                            icon: svgIcons.socialLink_2,
                            href: "mailto:mail@test.ru",
                        },
                    ].map(({href, icon}, key) => (
                        <a key={key}
                           href={href}
                           target="_blank"
                           rel="noopener noreferrer nofollow"
                           className={clsx({
                               [style.socialLink]: true,
                               [style.socialLink_policy]: pathname !== "/",
                           })}
                        >
                            {icon}
                        </a>
                    ))
                }
            </nav>

            <nav className={style.links}>
                {
                    [
                        {
                            label: "Terms and Conditions",
                            href: "/termsAndConditions",
                        },
                        {
                            label: "Privacy Policy",
                            href: "/privacyPolicy",
                        },
                        {
                            label: "Refund Policy",
                            href: "/refundPolicy",
                        },
                    ].map(({href, label}, key) => (
                        <Link key={key}
                              href={href}
                              className={clsx({
                                  [style.link]: true,
                                  [style.link_policy]: pathname !== "/",
                              })}
                        >
                            <p>{label}</p>
                        </Link>
                    ))
                }
            </nav>
        </footer>
    )
}