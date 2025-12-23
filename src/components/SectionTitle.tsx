interface SectionTitleProps {
    title: String,
    content: String,
}

function SectionTitle({ title, content }: SectionTitleProps) {
    return (
        <section className="w-full mt-[70px] mb-5">
            <div className="p-[15px]">
                <h2 className="text-[40px] font-medium leading-10 text-center mb-[15px]">
                    {title}
                </h2>
                <p className="text-xs text-[#77838F] text-center leading-6.5">
                    {content}
                </p>
            </div>
        </section>
    )
}

export default SectionTitle