import { FaPhone, FaFacebook } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md"

export default function Contact() {
    return (
        <div className="bg-fourth-color grid grid-cols-2 text-title-primary font-semibold font-serif">
            <div className="text-left ">
                {/* react icon Localisation "where to find use" */}
                <h1 className="flex flex-row-reverse justify-center">
                    <span>
                        Ivato
                    </span>
                    <MdLocationOn className="text-title-secondary text-[40px]"/>
                </h1>
                <h1>

                </h1>
            </div>
            <div className="">
                {/* cellphone and facebook account add link */}
                <h1>
                    It's a phone
                    <FaPhone className="text-title-secondary text-[30px]"/>
                </h1>
                <h1>
                    <FaFacebook className="text-title-secondary text-[30px]"/>
                </h1>
            </div>
        </div>
    )
}