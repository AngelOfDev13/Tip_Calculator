const formatcurrency = (quantity : number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(quantity)
}

export default formatcurrency;