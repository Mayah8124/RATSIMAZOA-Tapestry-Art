import { FaPhone } from "react-icons/fa"

export default function Contact() {
    return (
        <div className="bg-fourth-color grid grid-cols-2">
            <div className="text-left">
                {/* react icon Localisation "where to find use" */}
                <h1>It's a phone
                    <FaPhone className="text-red-700"/>
                </h1>
            </div>
            <div className="">
                {/* cellphone and facebook account add link */}
            </div>
        </div>
    )
}