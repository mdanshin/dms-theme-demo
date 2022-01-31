import { useState } from 'react';

export default function useHandleCountry(event?: any): any {    
    const [country, setCountry] = useState('US')
    
    const handle = (event: any) => {
        setCountry(event.target.value)
    }

    return {
        country, 
        handle
    }
}
