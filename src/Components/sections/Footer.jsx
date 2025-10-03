export default function Footer  () {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center text-sm text-gray-400 py-4 px-4 md:px-0 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-t border-white/10">
            © {currentYear} Ben Rich. All rights reserved.
        </footer>
    );
};

