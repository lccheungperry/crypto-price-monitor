

interface CryptoPriceCardProps {
    name: string,
    price: number,
    volume: number,
}

const CryptoPriceCard = (props: CryptoPriceCardProps) => {
    const { name, price, volume } = props

    return (<>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">{name}</div>
                <p className="text-amber-500 text-base">{price ? `$${price}` : '-'}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <div className="py-1 text-sm font-semibold text-gray-400 mr-2">volume:</div>
                <div className="py-1 text-sm font-semibold text-gray-400 mr-2 mb-2">{volume ? volume : '-'}</div>
            </div>
        </div>
    </>)
}

export default CryptoPriceCard