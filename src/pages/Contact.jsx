import { FaPhone, FaFacebook } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md"
import { FaRegCopy } from "react-icons/fa";

export default function Contact() {
    const [textToCopy, setTextToCopy] = useState('Some default text to copy');
    const [copySuccess, setCopySuccess] = useState('');
    const inputRef = useRef(null);

    const copyToClipboard = async () => {
        try {
        // Use the modern Clipboard API
            await navigator.clipboard.writeText(textToCopy);
            setCopySuccess('Copied!');
      
        // Optional: Reset the success message after a few seconds
            setTimeout(() => {
                setCopySuccess('');
            }, 2000); // 2 seconds
      
        } catch (err) {
            console.error('Failed to copy text: ', err);
            setCopySuccess('Failed to copy!');
        }
    };

    return (
        <div className="bg-fourth-color grid grid-cols-2 text-title-primary font-semibold font-serif">
            <div className="text-left ">
                {/* react icon Localisation "where to find use" */}
                <h1 className="flex flex-row-reverse justify-center items-center">
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
                    <FaRegCopy className="text-title-secondary text-[30px]"/>
                    <span
                        type="text"
                        ref={inputRef}
                        value={textToCopy}
                        onChange={(e) => setTextToCopy(e.target.value)}
                    >
                        +261 34 --- -- ---
                    </span>
                    <FaPhone className="text-title-secondary text-[30px]"/>
                </h1>
                <h1>
                    <span>

                    </span>
                    <FaFacebook className="text-title-secondary text-[30px]"/>
                </h1>
            </div>
        </div>
    )
}