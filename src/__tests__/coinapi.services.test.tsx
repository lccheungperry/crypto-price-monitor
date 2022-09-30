import { Asset, listAssets } from "../services/coinapi.services"
import axios from 'axios'

jest.mock('axios');

test('check listAssets result with default input', async () => {
    const filter_asset_id = ['BTC', 'ETH', 'LTC', 'XMR', 'XRP', 'DOGE', 'DASH', 'MAID', 'LSK', 'SJCX'];

    (axios.get as jest.Mock).mockResolvedValue({
        data: [
            {
                "asset_id": "BTC",
                "name": "Bitcoin",
                "type_is_crypto": 1,
                "data_quote_start": "2014-02-24T17:43:05.0000000Z",
                "data_quote_end": "2022-09-29T00:00:00.0000000Z",
                "data_orderbook_start": "2014-02-24T17:43:05.0000000Z",
                "data_orderbook_end": "2022-09-29T00:00:00.0000000Z",
                "data_trade_start": "2010-07-17T23:09:17.0000000Z",
                "data_trade_end": "2022-09-29T00:00:00.0000000Z",
                "data_symbols_count": 115887,
                "volume_1hrs_usd": 930703368109.43,
                "volume_1day_usd": 45800667749986910,
                "volume_1mth_usd": 2.152263722137512e+21,
                "price_usd": 19501.82667699004,
                "id_icon": "4caf2b16-a017-4e26-a348-2cea69c34cba",
                "data_start": "2010-07-17",
                "data_end": "2022-09-29"
            },
            {
                "asset_id": "LTC",
                "name": "Litecoin",
                "type_is_crypto": 1,
                "data_quote_start": "2014-04-20T15:06:34.0000000Z",
                "data_quote_end": "2022-09-29T00:00:00.0000000Z",
                "data_orderbook_start": "2014-04-20T15:06:34.0000000Z",
                "data_orderbook_end": "2022-09-29T00:00:00.0000000Z",
                "data_trade_start": "2013-05-19T15:23:45.0000000Z",
                "data_trade_end": "2022-09-29T00:00:00.0000000Z",
                "data_symbols_count": 4853,
                "volume_1hrs_usd": 866096899.55,
                "volume_1day_usd": 27141257174.9,
                "volume_1mth_usd": 931714344258.22,
                "price_usd": 53.852854895092136,
                "id_icon": "a201762f-1499-41ef-9b84-e0742cd00e48",
                "data_start": "2013-05-19",
                "data_end": "2022-09-29"
            },
            {
                "asset_id": "XRP",
                "name": "Ripple",
                "type_is_crypto": 1,
                "data_quote_start": "2014-07-31T13:05:46.0000000Z",
                "data_quote_end": "2022-09-29T00:00:00.0000000Z",
                "data_orderbook_start": "2014-07-31T13:05:46.0000000Z",
                "data_orderbook_end": "2022-09-29T00:00:00.0000000Z",
                "data_trade_start": "2013-11-25T11:54:57.9270000Z",
                "data_trade_end": "2022-09-29T00:00:00.0000000Z",
                "data_symbols_count": 5905,
                "volume_1hrs_usd": 409390736.87,
                "volume_1day_usd": 8280900605.19,
                "volume_1mth_usd": 154045558442.32,
                "price_usd": 0.48957629591105134,
                "id_icon": "ba90bcb0-cafb-4801-ac5d-d310f47d6411",
                "data_start": "2013-11-25",
                "data_end": "2022-09-29"
            },
            {
                "asset_id": "DOGE",
                "name": "DogeCoin",
                "type_is_crypto": 1,
                "data_quote_start": "2014-07-31T13:05:46.0000000Z",
                "data_quote_end": "2022-09-29T00:00:00.0000000Z",
                "data_orderbook_start": "2014-07-31T13:05:46.0000000Z",
                "data_orderbook_end": "2022-09-29T00:00:00.0000000Z",
                "data_trade_start": "2014-02-21T05:16:16.8330000Z",
                "data_trade_end": "2022-09-29T00:00:00.0000000Z",
                "data_symbols_count": 5333,
                "volume_1hrs_usd": 37371486.5,
                "volume_1day_usd": 2130602606.46,
                "volume_1mth_usd": 258378949965573.78,
                "price_usd": 0.06077875197124292,
                "id_icon": "63e240f3-047f-41c7-9179-6784bc719f63",
                "data_start": "2014-02-21",
                "data_end": "2022-09-29"
            },
            {
                "asset_id": "ETH",
                "name": "Ethereum",
                "type_is_crypto": 1,
                "data_quote_start": "2015-08-07T14:50:38.1774950Z",
                "data_quote_end": "2022-09-29T00:00:00.0000000Z",
                "data_orderbook_start": "2015-08-07T14:50:38.1774950Z",
                "data_orderbook_end": "2022-09-29T00:00:00.0000000Z",
                "data_trade_start": "2015-08-07T15:21:48.1062520Z",
                "data_trade_end": "2022-09-29T00:00:00.0000000Z",
                "data_symbols_count": 91618,
                "volume_1hrs_usd": 64168689808.87,
                "volume_1day_usd": 30508818169902.78,
                "volume_1mth_usd": 4574875870449366,
                "price_usd": 1334.3186066352623,
                "id_icon": "604ae453-3d9f-4ad0-9a48-9905cce617c2",
                "data_start": "2015-08-07",
                "data_end": "2022-09-29"
            },
            {
                "asset_id": "DASH",
                "name": "Dash",
                "type_is_crypto": 1,
                "data_quote_start": "2016-06-12T11:53:38.1523879Z",
                "data_quote_end": "2022-09-29T00:00:00.0000000Z",
                "data_orderbook_start": "2016-06-12T11:53:38.1523879Z",
                "data_orderbook_end": "2022-09-29T00:00:00.0000000Z",
                "data_trade_start": "2016-05-11T17:29:38.0000000Z",
                "data_trade_end": "2022-09-29T00:00:00.0000000Z",
                "data_symbols_count": 840,
                "volume_1hrs_usd": 20801411.81,
                "volume_1day_usd": 459925956.16,
                "volume_1mth_usd": 14033522671.2,
                "price_usd": 42.28761046954758,
                "id_icon": "73fb6d79-15a2-4f51-9308-09b9e2b84c8f",
                "data_start": "2016-05-11",
                "data_end": "2022-09-29"
            },
            {
                "asset_id": "LSK",
                "name": "Lisk",
                "type_is_crypto": 1,
                "data_quote_start": "2016-05-27T12:01:34.4232800Z",
                "data_quote_end": "2022-09-29T00:00:00.0000000Z",
                "data_orderbook_start": "2016-05-27T12:01:34.4232800Z",
                "data_orderbook_end": "2022-09-29T00:00:00.0000000Z",
                "data_trade_start": "2016-05-27T12:03:22.6175340Z",
                "data_trade_end": "2022-09-29T00:00:00.0000000Z",
                "data_symbols_count": 144,
                "volume_1hrs_usd": 35947.86,
                "volume_1day_usd": 2389579.9,
                "volume_1mth_usd": 141356913.01,
                "price_usd": 0.953757,
                "id_icon": "9c559a00-fcde-4223-b545-64bf13ca39af",
                "data_start": "2016-05-27",
                "data_end": "2022-09-29"
            },
            {
                "asset_id": "MAID",
                "name": "MaidSafeCoin",
                "type_is_crypto": 1,
                "data_quote_start": "2016-06-12T11:53:38.1523879Z",
                "data_quote_end": "2022-09-29T00:00:00.0000000Z",
                "data_orderbook_start": "2016-06-12T11:53:38.1523879Z",
                "data_orderbook_end": "2022-09-29T00:00:00.0000000Z",
                "data_trade_start": "2016-05-29T15:05:24.0000000Z",
                "data_trade_end": "2022-09-29T00:00:00.0000000Z",
                "data_symbols_count": 30,
                "volume_1hrs_usd": 144.01,
                "volume_1day_usd": 1119.95,
                "volume_1mth_usd": 530495.7,
                "price_usd": 0.1907388927628027,
                "id_icon": "9199da96-1949-49ac-9475-c45a6e9097f5",
                "data_start": "2016-05-29",
                "data_end": "2022-09-29"
            },
            {
                "asset_id": "XMR",
                "name": "Monero",
                "type_is_crypto": 1,
                "data_quote_start": "2016-06-12T11:53:38.1680117Z",
                "data_quote_end": "2022-09-29T00:00:00.0000000Z",
                "data_orderbook_start": "2016-06-12T11:53:38.1680117Z",
                "data_orderbook_end": "2022-09-29T00:00:00.0000000Z",
                "data_trade_start": "2016-05-29T15:06:50.0000000Z",
                "data_trade_end": "2022-09-29T00:00:00.0000000Z",
                "data_symbols_count": 772,
                "volume_1hrs_usd": 18703331.88,
                "volume_1day_usd": 754200142.06,
                "volume_1mth_usd": 24263993433.88,
                "price_usd": 148.21972423721135,
                "id_icon": "e342d99d-4648-423e-9fb5-f68785dd2adf",
                "data_start": "2016-05-29",
                "data_end": "2022-09-29"
            },
            {
                "asset_id": "SJCX",
                "name": "Storjcoin X",
                "type_is_crypto": 1,
                "data_quote_start": "2016-06-12T11:53:38.1680117Z",
                "data_quote_end": "2020-05-08T05:54:33.4688226Z",
                "data_orderbook_start": "2016-06-12T11:53:38.1680117Z",
                "data_orderbook_end": "2020-05-08T05:54:33.4688226Z",
                "data_trade_start": "2016-05-29T15:09:39.0000000Z",
                "data_trade_end": "2020-04-28T08:57:32.0000000Z",
                "data_symbols_count": 4,
                "volume_1hrs_usd": 0,
                "volume_1day_usd": 0,
                "volume_1mth_usd": 0,
                "id_icon": "488b757d-c1b4-4261-b43d-82ffbd0bb474",
                "data_start": "2016-05-29",
                "data_end": "2020-05-08"
            }
        ]
    });

    listAssets({
        filter_asset_id,
    }).then((data: Asset[]) => {
        expect(data.length).toBe(10)
    })
})

jest.resetAllMocks()

test('check catch box when api throws error', async () => {
    const filter_asset_id: string[] = [];

    (axios.get as jest.Mock).mockRejectedValue(new Error('test'));

    listAssets({
        filter_asset_id,
    }).then((data: Asset[]) => {
    }).catch(reason => {
        expect(reason.message).toBe('test')
    })
})

jest.resetAllMocks()

export { }