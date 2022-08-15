import React, { useEffect, useState } from 'react';

export interface SuccessAlertProps {
    message: string;
    show: boolean;
}

export default function ErrorAlert(props: SuccessAlertProps) {
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
        <> {
            visible && <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                <span className="font-medium"> {message}</span>
            </div>
        }
        </>  
    )
}
