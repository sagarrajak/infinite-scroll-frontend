import React, { useEffect, useState } from 'react';

export interface SuccessAlertProps {
    message: string;
    show: boolean;
}

export default function SuccessAlert(props: SuccessAlertProps) {
    const { message, show } = props;
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        if (show) {
            setVisible(true);
        }
        return () => {
            setTimeout(() => {
                setVisible(false);
            }, 2000);
        }
    }, [show]);

    return (
        <>
            {visible && <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                <span className="font-medium">{message}</span>
            </div>}
        </>
    )
}
