const withFilter = (products, filter) => {
    switch (filter) {
        case 'Xs':
            return products.filter(product => product.size === "Xs")
        case 'S':
            return products.filter(product => product.size === "S")
        case 'L':
            return products.filter(product => product.size === "L")
        default:
            return products
    }
}

export default withFilter;