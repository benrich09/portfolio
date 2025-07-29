const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center text-sm text-gray-400 py-4">
            © {currentYear} Ben Rich. All rights reserved.
        </footer>
    );
};

export default Footer;
