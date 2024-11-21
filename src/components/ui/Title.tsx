const Title = ({ label } : {label:string}) => {
    return (
        <div className="text-neutral-300 text-xl border-y border-neutral-800 py-4">
          <h3 className="uppercase mx-10 text-center md:text-left">
            { label }
          </h3>
        </div>
    )
}

export default Title;