

const DynamicTextForPages = ({text}) => {
    return (
        <div className="text-lg md:text-2xl font-semibold p-4">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-blue-500 dark:from-blue-500 dark:to-orange-300">
                This is <span>{text}</span>
            </p>
        </div>
    )
}

export default DynamicTextForPages