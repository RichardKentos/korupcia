interface Button {
    text: string,
    id: number,
    points: number,
    handleClick: any
    handlePoints: any
    currentPoints:number
    setWrong:any,
    wrong:any
}

const Button = (props: Button) => {        
    return (
        <div className="xl:w-auto w-full flex justify-center my-2">
            <a onClick={(e) => {
                props.handleClick(props.id)
                props.handlePoints(props.currentPoints+props.points)                
                if (props.points < 3) {
                    props.wrong.push(props.id)
                }
            } }
            className={`bg-yellow-400 py-2 px-2 text-xl font-semibold rounded-md hover:text-white cursor-pointer`}>{props.text}</a>
              </div>
        )
}

export default Button