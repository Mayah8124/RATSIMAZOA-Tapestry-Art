import logo from '../assets/logo.png';
import { FaPhone, FaFacebook,FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
    return (
        <section ref={ref} className="w-full pt-10 px-4 bg-fourth-color title-primary font-serif">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-5 py-10">

                {/* Logo Section */}
                <div className="flex flex-col items-center md:items-start max-w-sm">
                    <img
                        src={logo}
                        alt="Tapestry Logo"
                        className="h-32 w-auto mb-4 object-contain drop-shadow-md"
                    />
                    <div className='flex flex-col text-center md:text-left'>
                        <h2 className="text-2xl font-bold mb-2">Tapestry Art</h2>
                            <p className="text-center md:text-left opacity-80 leading-relaxed">
                                Art de la tapisserie fait à la main.
                                Chaque création est unique, tissée avec passion et dévouement pour sublimer votre intérieur.
                            </p>
                    </div>
                </div>

                {/* Nous trouver */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-widest border-b-2 border-title-secondary pb-1">
                        Nous trouver
                    </h3>
                    <div className="flex items-start gap-3 mt-2">
                        <MdLocationOn className="text-title-secondary text-2xl shrink-0 mt-1" />
                        <p className="opacity-90 leading-relaxed">
                            Ivato, 105<br />
                            Antananarivo, Madagascar
                        </p>
                    </div>
                </div>

                {/* Contact */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-widest border-b-2 border-title-secondary pb-1">
                        Contact
                    </h3>
                    <a
                        href="tel:+261346171662"
                        className="flex items-center gap-3 mt-2 hover:text-title-secondary transition-colors duration-300 group"
                    >
                        <FaPhone className="text-title-secondary text-xl group-hover:scale-110 transition-transform" />
                        <span className="opacity-90 group-hover:opacity-100">+261 34 61 716 62</span>
                    </a>
                    <a
                        href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DXDwSWwxqnzBCGhtZSHrTQFvNSQVnNBPcxZHJpTXKCdVPJtKxdKBpHMfRXWzqHmnZBdrHSbGjqGgzdfnFsDsFvcsPDdtwLPNbGbfSxSkTvdggGqhgqKjCzvB"
                        className="flex items-center gap-3 mt-4 hover:text-title-secondary transition-colors duration-300 group"
                    >
                        <MdEmail className="text-title-secondary text-xl group-hover:scale-110 transition-transform" />
                        <span className="opacity-90 group-hover:opacity-100">ratsimazoanyantsa@gmail.com</span>
                    </a>
                </div>

                {/* Réseaux sociaux */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-widest border-b-2 border-title-secondary pb-1">
                        Réseaux sociaux
                    </h3>
                    <a
                        href="https://www.facebook.com/profile.php?id=61578605880168&locale=fr_FR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 mt-2 hover:text-title-secondary transition-colors duration-300 group"
                    >
                        <FaFacebook className="text-title-secondary text-xl group-hover:scale-110 transition-transform" />
                        <span className="opacity-90 group-hover:opacity-100">Tapestry Art By RATSIMAZOA</span>
                    </a>
                    <a
                        href="https://www.instagram.com/ratsima____zoa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 mt-2 hover:text-title-secondary transition-colors duration-300 group"
                    >
                        <FaInstagram className="text-title-secondary text-xl group-hover:scale-110 transition-transform" />
                        <span className="opacity-90 group-hover:opacity-100">ratsima____zoa</span>
                    </a>
                </div>

            </div>

            {/* Separator and Copyright */}
            <div className="max-w-7xl mx-auto">
                <hr className="border-t border-title-primary opacity-20" />
                <div className="py-6 text-center text-sm opacity-70 flex flex-col md:flex-row justify-center items-center gap-2">
                    <p>&copy; {new Date().getFullYear()} Tapestry Art By RATSIMAZOA.</p>
                    <p>Tous droits réservés.</p>
                </div>
            </div>
        </section>
    );
});

export default Contact;