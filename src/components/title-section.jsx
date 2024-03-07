export function TitleSection({subtitle, title}) {
    return (
        <div className='mb-14 space-y-1'>
            <span className='text-xl font-semibold font-BrownStdRegular text-white text-opacity-70'>{subtitle}</span>
            <h2 className='font-BrownStdBold text-5xl/tight'>{title}</h2>

            <span className='text-xl font-semibold font-BrownStdRegular text-white text-opacity-70'>{subtitle}</span>
            <h2 className='font-BrownStdBold text-5xl/tight'>{title}</h2>
        </div>
    )
}