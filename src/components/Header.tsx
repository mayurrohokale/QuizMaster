import { useState, useEffect } from "react";



export default function Header() {

    const [username, setUsername] = useState();

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


return (
    <div className='fixed top-0 left-0 w-full h-[50px] bg-[#4A4A4A] text-sm text-white flex items-center justify-center'>
         <p>Hello, {username ?? 'User'}! </p>
    </div>
)
}