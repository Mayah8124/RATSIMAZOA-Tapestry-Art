import { FaPhone, FaFacebook } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md"
import { FaRegCopy } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useState  } from "react";

import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
    const [textToCopy, setTextToCopy] = useState('Tapestry Art By RATSIMAZOA');
    const [numberToCopy, setNumberCopy] = useState('+261 34 61 716 62')
    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            await navigator.clipboard.writeText(numberToCopy);
            setCopySuccess(true);
      
            setTimeout(() => 
                setCopySuccess(false), 2000); 
      
        } catch (err) {
            console.error('Failed to copy text: ', err);
            setCopySuccess('Failed to copy!');
        }
    };

    return (
        <section ref={ref} className="w-full pt-20 ">
            <div className="bg-fourth-color grid grid-cols-3 text-title-primary font-semibold font-serif py-2">
                {/* react icon Localisation "where to find us" */}
                <h1 className="flex flex-row-reverse justify-center items-center gap-1">
                    <span>
                        Ivato, 105
                    </span>
                    <MdLocationOn className="text-title-secondary text-[40px]"/>
                </h1>
        
                {/* cellphone and facebook account add link */}
                <h1 className="flex flex-row-reverse justify-center items-center gap-3">
                    <span>
                        +261 34 61 716 62
                    </span>
                    <FaPhone className="text-title-secondary text-[30px]"/>
                </h1>

                <h1 className="flex flex-row-reverse justify-center items-center gap-3">
                    <span>
                        Tapestry Art By RATSIMAZOA
                    </span>
                    <FaFacebook className="text-title-secondary text-[30px]"/>
                </h1>
            </div>
        </section>
    )
});

export default Contact;