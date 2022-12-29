import { useWallet } from "../../context/wallet"

export const useSignMessage = () => {
  const { signer } = useWallet()
  return (message: string) => signer?.signMessage(message);
}
