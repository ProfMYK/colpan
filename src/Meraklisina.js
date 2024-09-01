function Meraklisina(props) {
    let pa = props.paragraph.split('\n').filter((a) => a !== "");

    return (
        <div className="w-[1fr] bg-white rounded-[2rem] shadow-2xl m-5 flex flex-col p-10 gap-10">
            <h1 className="text-foreground-primary text-5xl font-bold font-serif">{props.title}</h1>
            {pa.map((p, index) => (
                <p className="text-foreground-secondary text-2xl">{p}</p>   
            ))}
        </div>
    )
}

export default Meraklisina;