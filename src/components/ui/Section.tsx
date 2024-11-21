const Section = ({ children } : {children: React.ReactNode}) => {
    return (
        <section className="m-auto w-4/5 md:w-2/3">
            { children }
        </section>
    )
}

export default Section;