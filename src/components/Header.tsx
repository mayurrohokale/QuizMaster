import { useState, useEffect } from "react";
import { TonConnectButton} from '@tonconnect/ui-react';

export default function Header() {
    const [username, setUsername] = useState();
    // const userFriendlyAddress = useTonAddress();
    // const wallet = useTonWallet();

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const tg = (window as any).Telegram?.WebApp;
        if (!tg) return; // Ensure tg exists before calling methods on it
        tg.ready();
    
        const user = tg.initDataUnsafe?.user;
        console.log(user);
        if (user) {
            const displayName = user.username
                ? user.username
                : `${user.first_name} ${user.last_name || ''}`;
            setUsername(displayName);
        }
    }, []);

    // const handleDisconnect = () => {
    //     if (wallet && wallet.disconnect) {
    //         wallet.disconnect(); // Disconnect the wallet if connected
    //     }
    // };

    return (
        <div className='fixed top-0 left-0 w-full h-[70px] bg-[#4A4A4A] text-sm text-white flex items-center justify-center'>
            <p className="text-lg font-semibold">Hello, {username ?? 'User'}!</p>
            <div className="ml-4">
                <TonConnectButton />
            </div>

            {/* {wallet ? (
                <div className="ml-4">
                    <p>Connected wallet address: {userFriendlyAddress}</p>
                    <p>Device: {wallet.device.appName}</p>
                    <button 
                        onClick={handleDisconnect}
                        className="bg-red-500 text-white py-1 px-3 rounded mt-2"
                    >
                        Disconnect
                    </button>
                </div>
            ) : (
                <p className="ml-4">No wallet connected</p>
            )} */}
        </div>
    );
}
