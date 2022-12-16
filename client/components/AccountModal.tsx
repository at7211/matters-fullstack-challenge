import { FC } from 'react'

import { useWallet } from '@context/wallet'
import { formatAddress } from '@lib/format'

import { Box } from '@mui/material'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@components/Modal'
import IconImage from './IconImage'
import { useCopyText } from '@lib/hooks/useCopyText'

interface AccountModalProps {
  open: boolean
  onClose: () => void
}

const styles = {
  textButton: {
    display: 'flex',
    alignItems: 'center',
    width: '180px',
    color: 'primary.main',
    cursor: 'pointer',
    height: '14px',
    fontSize: '14px',
  },
} as const

const AccountModal: FC<AccountModalProps> = ({ open, onClose }) => {
  const { account, disconnect } = useWallet()
  const copyText = useCopyText()

  const handleDisconnect = () => {
    disconnect()
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Typography variant="subtitle1" color="primary">
        Account
      </Typography>
      <Typography variant="subtitle2">Connected with Metamask</Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
        <Button variant="contained" color="sky" style={{ width: '100%' }}>
          {formatAddress(account)}
        </Button>
        <Button variant="outlined" onClick={handleDisconnect} style={{ width: '100%' }}>
          DISCONNECT
        </Button>
      </Stack>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
        <Box
          component="section"
          sx={styles.textButton}
          onClick={() => (account ? copyText(account) : {})}
        >
          <IconImage src="/images/copy.svg" size={15} />
          Copy Address
        </Box>
        <Box component="section" sx={styles.textButton}>
          <a href={account ? `https://etherscan.io/address/${account}` : ''} target="_blank">
            <IconImage src="/images/link.svg" size={15} />
            View on Etherscan
          </a>
        </Box>
      </Stack>
    </Modal>
  )
}

export default AccountModal
