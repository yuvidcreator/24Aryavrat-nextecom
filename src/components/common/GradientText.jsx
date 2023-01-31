const GradientText = ({text}) => {
    return (
        <div className="text-2xl md:text-4xl font-extrabold p-2">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 dark:from-violet-500 dark:to-pink-500">
                <span>{text}</span>
            </p>
        </div>
    )
}

export default GradientText