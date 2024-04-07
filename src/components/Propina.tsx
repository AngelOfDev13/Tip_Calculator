const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

type PropinaProps = {
    setPropina: React.Dispatch<React.SetStateAction<number>>
}

const Propina = ({ setPropina } : PropinaProps) => {
    return (
        <div>
            <h3 className="font-black text-2xl">
                Propina
            </h3>
            <form action="">
                {
                    tipOptions.map(options => (
                        <div 
                            className="flex gap-4"
                            key={ options.id }>
                            <label htmlFor={options.id}>{options.label}</label>
                            <input 
                                id={ options.id }
                                type="radio"
                                name="tip"
                                value={options.value}
                                onChange={ e => setPropina(+e.target.value)}/>
                        </div>
                    ))
                }
            </form>
        </div>
    )
}

export default Propina;