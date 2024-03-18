export function TitleSection({subtitle, title}) {
    return (
        <div className='px-3 @desktop:px0 mb-14 space-y-1'>
            <span className='text-sm  @desktop:text-xl font-semibold font-BrownStdRegular text-white text-opacity-70'>{subtitle}</span>
            <h2 className='font-BrownStdBold text-3xl @desktop:text-5xl/tight'>{title}</h2>
        </div>
    )
}