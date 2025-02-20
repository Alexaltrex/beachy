import {Metadata} from "next";
import style from "./page.module.scss"
import {svgIcons} from "../../assets/svgIcons";


export const metadata: Metadata = {
    title: "Beachy - Refund Policy",
};

const RefundPolicyPage = () => {
    return (
        <div className={style.page}>

            {svgIcons.snowflake}

            <div className={style.inner}>

                <h2 className={style.title}>
                    Refund Policy
                </h2>

                <div className={style.divider}/>

                <div className={style.content}>
                    <div className={style.content_inner}>

                        {
                            Array.from(({length: 10}), (v, k) => k)
                                .map((key) => (
                                    <div key={key}
                                         className={style.block}
                                    >
                                        <p className={style.block_title}>
                                            Header
                                        </p>
                                        <p className={style.block_text}>
                                            The importance of these issues is so obvious that the constant information
                                            and propaganda support of our activities allows us to carry out important
                                            tasks to develop appropriate conditions for activation. On the other hand,
                                            the existing structure of the organization allows us to assess the
                                            importance of the development model.
                                        </p>
                                    </div>
                                ))
                        }

                    </div>
                </div>


            </div>
        </div>
    );
}

export default RefundPolicyPage
