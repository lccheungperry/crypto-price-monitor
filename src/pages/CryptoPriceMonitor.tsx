import React, { useEffect, useState } from 'react';
import CryptoPriceCard from '../components/CryptoPriceCard';
import { listAssets, Asset, ListAllAssetsParams } from '../services/coinapi.services';

const searchParamsFilters = [
  {
    key: 'filter_asset_id',
    title: 'Asset ID',
    options: [
      {
        text: 'All asset ID',
        value: null
      },
    ],
  },
]

const isNumber = (test: any): test is number => {
  return typeof test === 'number'
}

const CryptoPriceMonitor = () => {
  const [assetData, setAssetData] = useState<Asset[]>([])
  const [searchParams, serSearchParams] = useState<ListAllAssetsParams>({
    filter_asset_id: ['BTC', 'ETH', 'LTC', 'XMR', 'XRP', 'DOGE', 'DASH', 'MAID', 'LSK', 'SJCX'],
  })
  const [interval, setIntetval] = useState<string>('1day')

  useEffect(() => {
    listAssets(searchParams).then((data: Asset[]): void => {
      setAssetData(data)
    })
  }, [])

  const localFilters = [
    {
      key: 'interval',
      title: 'Interval',
      setter: (i: string) => setIntetval(i),
      options: [
        {
          text: '1 hour',
          value: '1hrs',
        },
        {
          text: '1 day',
          value: '1day',
        },
        {
          text: '1 month',
          value: '1mth',
        },
      ],
    },
  ]

  return (<>
    <div className="container mx-auto p-4">
      <div className="text-3xl py-4">Cryptocurrency Realtime Price</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {assetData.map(asset => {
          const intervalKey = `volume_${interval}_usd` as keyof Asset
          let volume: any
          if (isNumber(asset[intervalKey])) {
            volume = asset[intervalKey]
          }
          return <CryptoPriceCard
            name={asset.name}
            price={asset.price_usd}
            volume={volume}
          />
        })}
      </div>
    </div>
  </>)
}

export default CryptoPriceMonitor;
