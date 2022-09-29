import axios from "axios"

export interface ListAllAssetsParams {
    filter_asset_id?: string[] | undefined,
}

export interface Asset {
    asset_id: string,
    name: string,
    type_is_crypto: number,
    data_quote_start: string,
    data_quote_end: string,
    data_orderbook_start: string,
    data_orderbook_end: string,
    data_trade_start: string,
    data_trade_end: string,
    data_quote_count: number,
    data_trade_count: number,
    data_symbols_count: number,
    volume_1hrs_usd: number,
    volume_1day_usd: number,
    volume_1mth_usd: number,
    price_usd: number,
}

export const listAssets = async (params: ListAllAssetsParams): Promise<Asset[]> => new Promise(async (resolve, reject) => {
    try {
        const searchParams = new URLSearchParams()

        Object.entries(params).forEach(([k, v], i) => {
            if (Array.isArray(v) && !!v.length) searchParams.append(k, v.join(","))
        })

        const { data }: { data: Asset[] } = await axios.get(`https://rest.coinapi.io/v1/assets${searchParams.toString().length ? `?${searchParams.toString()}` : ''}`, {
            headers: {
                'X-CoinAPI-Key': process.env.REACT_APP_COINAPI_KEY || ''
            }
        })

        resolve(data)
    } catch (error) {
        console.log(error)
        reject(error)
    }
})