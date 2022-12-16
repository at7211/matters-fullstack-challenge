import BoxAnimation from '@components/BoxAnimation'
import ContentBgImg from '@components/ContentBgImg'
import Link from '@components/Link'
import { Box, Button, Divider, Typography } from '@mui/material'
import type { Theme } from '@mui/material/styles'
import Head from 'next/head'
import Image from 'next/image'

const list: {
  img: string
  name: string
  date: string
  link: string
  title: string
}[] = [
  {
    img: '/images/news/aegistrust.jpeg',
    name: 'Aegis Trust',
    date: '15 DEC 2022',
    link: 'https://www.aegiscustody.com/news/aegis-trust-digital-asset-manager',
    title:
      'Aegis Trust Offers Seamless and Integrated Digital Asset Custody Services for Asset Managers to Safeguard Client Investment',
  },
  {
    img: '/images/news/cision.jpeg',
    name: 'Cision PR Newswire',
    date: '09 DEC 2022',
    link: 'https://www.prnewswire.com/news-releases/aegis-trust-announces-landmark-partnership-with-cosmos-network-301698952.html',
    title: 'Aegis Trust Announces Landmark Partnership with Cosmos Network',
  },
  {
    img: '/images/news/coindesk.jpeg',
    name: 'CoinDesk',
    date: '23 NOV 2022',
    link: 'https://www.coindesk.com/web3/2022/11/22/crypto-custodian-aegis-trust-offers-25m-insurance-policy-for-nfts/',
    title: 'Crypto Custodian Aegis Trust Offers $25M Insurance Policy for NFTs',
  },
  {
    img: '/images/news/agoric.jpeg',
    name: 'Agoric',
    date: '28 SEP 2022',
    link: 'https://agoric.com/blog/announcements/aegis-launches-custody-support-for-agoric-bld/',
    title: 'Aegis Launches Custody Support for Agoric BLD',
  },
  {
    img: '/images/news/coinbasecloud.jpeg',
    name: 'Coinbase Cloud',
    date: '14 AUG 2022',
    link: 'https://www.coinbase.com/cloud/discover/solutions/aegis-trust-company',
    title:
      'Aegis Trust Company and Coinbase Cloud deliver institutional-grade staking and custodying for Evmos and Avalanche',
  },
  {
    img: '/images/news/yahoonews.jpeg',
    name: 'Yahoo TW',
    date: '11 DEC 2020',
    link: 'https://tw.news.yahoo.com/%E6%8E%A5%E8%BB%8C%E5%9C%8B%E9%9A%9B-%E6%96%B0%E5%89%B5aegis-custody%E4%BB%A5%E5%8D%80%E5%A1%8A%E9%8F%88%E6%89%93%E9%80%A0%E7%9A%84%E9%87%91%E8%9E%8D%E5%95%86%E5%93%81%E6%96%B0%E5%95%86%E6%A9%9F-031000089.html',
    title: '接軌國際！新創Aegis Custody以區塊鏈打造的金融商品新商機',
  },
]

const style = {
  container: [
    (theme: Theme) => ({
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
      [theme.breakpoints.down('md')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
      },
      '& .title': {
        my: '20px',
        fontSize: '20px',
        fontWeight: 600,
      },
      '& .date': {
        my: '20px',
        fontSize: '14px',
        color: '#B5B5B5',
      },
      '& .name': {
        fontSize: '14px',
      },
    }),
  ],
  box: {
    display: 'block',
    height: '100%',
    p: '20px',
    boxShadow: '0px 0px 15px 0px rgb(0 0 0 / 20%)',
  },
}

export default function ArticleList() {
  return (
    <>
      <Head>
        <title>News</title>
        <meta
          name="description"
          content="Articles and interviews from global, regional, and trade publications."
        />
      </Head>
      {/*
      <ContentVideo>
        <Typography color="primary">PRESS RELEASES & NEWS</Typography>

        <BoxAnimation type="fadeInUp">
          <Typography variant="h1">Media Coverage</Typography>
          <Typography variant="h2" color="primary">
            Articles and interviews from global, regional, and trade publications.
          </Typography>
        </BoxAnimation>

        <Link href="/contact">
          <Button variant="outlined">Media Inquiries</Button>
        </Link>
      </ContentVideo> */}

      <ContentBgImg>
        <Box sx={style.container}>
          {list.map((item, index) => {
            return (
              <BoxAnimation key={index} type="fadeInUp">
                <Box component="a" sx={style.box} href={item.link} target="_blank">
                  <Image
                    alt={item.img}
                    src={item.img}
                    width={800}
                    height={357}
                    layout="responsive"
                  />
                  <Divider />
                  <div className="date">{item.date}</div>
                  <Typography className="title" color="primary">
                    {item.title}
                  </Typography>
                  <div className="name">by {item.name}</div>
                </Box>
              </BoxAnimation>
            )
          })}
        </Box>
      </ContentBgImg>
    </>
  )
}
