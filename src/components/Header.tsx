import { useState, useEffect } from "react";


export default function Header() {

    const [username, setUsername] = useState('');

    useEffect(() => {
        const tg = window.Telegram.WebApp;
        tg.ready();

        const user = tg.initDataUnsafe?.user;
        console.log(user)
        if (user) {
    
            const displayName = user.username
                ? user.username
                : `${user.first_name} ${user.last_name || ''}`;
            setUsername(displayName);
        }

    }, []);


return (
    <div className='fixed top-0 left-0 w-full h-[50px] bg-blue-600 text-sm text-white flex items-center justify-center'>
        {username && <p>Hello, {username}!</p>}
    </div>
)
}